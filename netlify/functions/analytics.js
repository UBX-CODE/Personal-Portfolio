exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    const { page, action, timestamp } = data;

    // Basic validation
    if (!page || !action) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Here you would typically:
    // 1. Store analytics data in a database (MongoDB, PostgreSQL, etc.)
    // 2. Send data to analytics services like Google Analytics, Mixpanel, etc.
    // 3. Log user interactions for insights
    
    console.log('Analytics event:', { 
      page, 
      action, 
      timestamp: timestamp || new Date().toISOString(),
      userAgent: event.headers['user-agent'],
      ip: event.headers['client-ip']
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        message: 'Analytics event recorded' 
      })
    };

  } catch (error) {
    console.error('Error processing analytics:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 