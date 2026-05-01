import { corsHeaders } from '@supabase/supabase-js/cors';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY is not configured');
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not configured');

    const body = (await req.json()) as Partial<ContactPayload>;
    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim();
    const message = (body.message ?? '').toString().trim();

    if (!name || name.length > 100) {
      return new Response(JSON.stringify({ error: 'Neispravno ime' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!isValidEmail(email) || email.length > 255) {
      return new Response(JSON.stringify({ error: 'Neispravan email' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    if (!message || message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Neispravna poruka' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const TO = 'emirboudellaa19@gmail.com';

    const html = `
      <div style="font-family: Arial, sans-serif; color:#111;">
        <h2>Nova poruka sa ProBuild Sarajevo</h2>
        <p><strong>Ime:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Poruka:</strong></p>
        <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const resp = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'ProBuild Sarajevo <onboarding@resend.dev>',
        to: [TO],
        reply_to: email,
        subject: `Kontakt forma — ${name}`,
        html,
      }),
    });

    const data = await resp.json();
    if (!resp.ok) {
      throw new Error(`Resend API failed [${resp.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-contact error:', err);
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
