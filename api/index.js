// Vercel Serverless Function
export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from Triple M Startup API!',
    timestamp: new Date().toISOString()
  });
}
