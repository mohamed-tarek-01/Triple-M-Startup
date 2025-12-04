// Netlify Serverless Function
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Hello from Triple M Startup API!',
      timestamp: new Date().toISOString()
    })
  };
};

