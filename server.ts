import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', name: 'HaqShanasi API' });
  });

  // AI Chat Route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'your_key_here' || apiKey === 'MY_GEMINI_API_KEY') {
        // Fallback response if API Key is missing or placeholder
        return res.json({
          response: `Assalamu Alaikum! I am **HaqShanasi**, your warm legal rights companion.

*Note: The Gemini API Key is not configured yet. Here is general guidance on your query:*

For Pakistani legal matters involving marriage, divorce (Khula), inheritance, or workplace rights:
1. **Nikahnama Rights**: Columns 18-20 are critical for specifying Talaq-e-Tafweez (delegated right of divorce) and dower terms under the Muslim Family Laws Ordinance 1961.
2. **Khula Procedure**: Under the Family Courts Act 1964, a woman can seek Khula through the Family Court.
3. **Inheritance**: Women are legally guaranteed fixed Quranic shares under Pakistani law and Section 498A PPC penalizes depriving women of inheritance.
4. **Emergency Helplines**: Call Ministry of Human Rights Helpline at **1099** or Edhi at **115**.

Please add your valid \`GEMINI_API_KEY\` in your environment or Secrets settings to enable live AI responses.`,
          isFallback: true,
        });
      }

      const systemInstruction = `You are HaqShanasi, a warm legal rights companion for Pakistani women. Provide clear info on marriage, divorce, inheritance, property, workplace harassment, domestic violence, child custody. Speak like a knowledgeable older sister. Clarify you give general info, not professional legal advice. Recommend consulting a lawyer for specific cases. Respond in English or Urdu based on user. Be concise but thorough.

Key Pakistani Laws reference:
- Muslim Family Laws Ordinance 1961 (MFLO) - Marriage registration, Nikahnama Columns 18-22 (Talaq-e-Tafweez), Polygamy rules
- Dissolution of Muslim Marriages Act 1939 & Family Courts Act 1964 - Khula, Grounds for divorce, Iddat
- Guardians and Wards Act 1890 - Child Custody (Hizanat)
- West Pakistan Land Revenue Act & Section 498A PPC - Female Inheritance Rights & Anti-Deprivation laws
- Enforcement of Women's Property Rights Act 2020 - Recovery of seized property via Ombudsperson
- Protection Against Harassment of Women at the Workplace Act 2010 (and 2022 amendment) - Inquiry Committees & Ombudsperson
- Domestic Violence Prevention & Protection Acts (Punjab, Sindh, KPK, Balochistan & Federal Act 2021) - Protection Orders & Safe Housing
- Dowry and Bridal Gifts (Restriction) Act 1976 - Jahez restrictions and wife's ownership of bridal gifts`;

      // Initialize Gemini SDK
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Format conversation history for prompt
      let formattedPrompt = `${systemInstruction}\n\n`;

      if (Array.isArray(history) && history.length > 0) {
        formattedPrompt += `Conversation History:\n`;
        for (const msg of history.slice(-6)) {
          const roleLabel = msg.role === 'user' ? 'User' : 'HaqShanasi';
          formattedPrompt += `${roleLabel}: ${msg.content}\n`;
        }
      }

      formattedPrompt += `User Question: ${message}\n\nHaqShanasi Response:`;

      const aiResponse = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: formattedPrompt,
      });

      const responseText = aiResponse.text || 'I am sorry, I could not generate a response at this time. Please try asking your question again.';

      return res.json({ response: responseText });
    } catch (error: any) {
      console.error('Error in /api/chat:', error);
      return res.status(500).json({
        response: 'Assalamu Alaikum. I encountered a temporary connection error. Please verify your legal query or try again in a moment. Remember, in immediate danger you can reach the Women Helpline at 1099 or Edhi at 115.',
        error: error?.message || 'Server error',
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`HaqShanasi Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
