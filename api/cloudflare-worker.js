// Cloudflare Worker - Serverless API
// Deploy this as a Cloudflare Worker

export default {
  async fetch(request) {
    // Handle CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle OPTIONS request for CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders
      });
    }

    // Handle GET requests
    if (request.method === 'GET') {
      return new Response(
        JSON.stringify({
          message: 'Hello from Triple M Startup API!',
          timestamp: new Date().toISOString(),
          method: request.method,
          url: request.url
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Handle POST requests
    if (request.method === 'POST') {
      const body = await request.json().catch(() => ({}));
      return new Response(
        JSON.stringify({
          message: 'Data received!',
          received: body,
          timestamp: new Date().toISOString()
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders
          }
        }
      );
    }

    // Default response
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
};

