import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// API Key setup with safety fallbacks
const getApiKeyOutput = () => {
  const envKey = process.env.GEMINI_API_KEY;
  if (envKey && envKey !== "MY_GEMINI_API_KEY" && envKey.trim().length > 0) {
    return envKey;
  }
  // Fallback to the requested API key
  return "AIzaSyCLKX2tohQTHF9Gk06XqqlT-tXUjVSOYBU";
};

let aiClient: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!aiClient) {
    const apiKey = getApiKeyOutput();
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
};

// Log configuration status
console.log(`[Server] Gemini API Key configured: ${getApiKeyOutput().substring(0, 8)}...`);

// Chatbot endpoint using @google/genai (server-side only)
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const ai = getAiClient();
    
    // Convert client messages to Gemini content format
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }]
    }));

    const systemInstruction = `You are a helpful, professional AI customer assistant for the company "Reliable Services & Solutions" located in New River, Arizona. 
Your goal is to build trust, answer customer questions, and encourage them to make a phone call or submit a quote request.

Company details:
- Name: Reliable Services & Solutions
- Location: New River, Arizona (serving New River, Desert Hills, Anthem, Phoenix, and surrounding Maricopa County areas).
- Phone: 623-980-5133 (direct click-to-call is highly recommended to users!)
- Email: blown1931@msn.com
- Ethos: Family-owned, reliable, hardworking, extremely professional, honest, and dedicated to high-quality work.

Services Offered:
1. Residential Services: Complete electrical, plumbing, carpentry, and home improvement repair.
2. Commercial Services: Workspace updates, light commercial repairs, retail fixture installation, facility maintenance.
3. Maintenance & Repairs: Scheduled upkeep, preventative servicing, appliance trouble-shooting, property tune-ups.
4. Emergency Services: 24/7 fast routing for urgent residential/commercial plumbing, electrical breakdowns, repairs.
5. General Contracting: Room additions, patio remodels, outdoor kitchens, custom renovations.
6. Custom Solutions: Tailored services unique to Arizona desert climates, custom fabricating, and special requests.

Tone & Style:
- Professional, welcoming, direct, trustworthy, hardworking, and down-to-earth family business vibe.
- Be extremely brief and scannable. Avoid repeating yourself.
- If they ask for pricing, explain that we offer custom, transparent quotes because every job in New River/Arizona is unique. Suggest they call us directly at 623-980-5133 for fastest response, or click our "Request a Quote" button.
- Always provide helpful and concise responses.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to communicate with AI helper. Please try calling us directly at 623-980-5133." });
  }
});

// Mock Leads/Contact API (for real feel)
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(`[STUB DATA CAPTURED] Contact Form Lead from ${name}:`, { email, phone, message });
  return res.json({
    success: true,
    message: "Thank you for reaching out! We have received your message and will be calling or emailing you within 1-2 hours."
  });
});

app.post("/api/quote", (req, res) => {
  const { name, email, phone, category, details, urgency } = req.body;
  console.log(`[STUB DATA CAPTURED] Quote Request Lead from ${name}:`, { email, phone, category, details, urgency });
  return res.json({
    success: true,
    message: "Your custom quote request has been received! Our local team is reviewing the scope now and we will contact you shortly."
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("[Server] Vite running in middleware mode (development)");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("[Server] Serving static content in production mode");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Reliable Services running on http://localhost:${PORT}`);
  });
}

startServer();
