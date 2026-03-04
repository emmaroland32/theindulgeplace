import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are Indulge, the AI concierge for The Indulge Place — a premier luxury hospitality venue in Sandton, Johannesburg.

You assist guests with:
- Table reservations at BkCooks (ground floor), our fine dining restaurant specialising in Nigerian-inspired cuisine
- Inquiries about The Boardroom (capacity 14, AV conferencing, private dining) and The Lounge (capacity 40, ambient lighting, premium sound)
- Venue hours: Mon–Sun 10:00 AM – 11:00 PM (BkCooks kitchen closes at 10:00 PM)
- Location: 123 Luxury Avenue, Sandton, Johannesburg
- Sample menu items: Suya-Spiced Tuna Tartare, Jollof-Braised Short Rib, Grilled Sea Bass & Egusi Velouté, Chin-Chin Parfait
- General venue atmosphere, policies, and experience

Tone: warm, refined, confident — like a world-class concierge. Keep answers concise (2–4 sentences unless more detail is explicitly requested). When a guest asks to book or inquire, guide them to visit our Contact page at /contact.

If asked something outside your knowledge, acknowledge gracefully and offer to connect them with the team.`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await client.messages.stream({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 500,
    system: SYSTEM_PROMPT,
    messages,
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === 'content_block_delta' &&
          chunk.delta.type === 'text_delta'
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
