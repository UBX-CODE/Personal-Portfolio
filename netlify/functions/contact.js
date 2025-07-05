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
    const { name, email, message } = data;

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Mailgun, etc.
    // 2. Store the message in a database
    // 3. Log the contact attempt
    
    console.log('Contact form submission:', { name, email, message });

    // For now, we'll just return a success response
    // In production, you'd integrate with an email service
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Configure this properly for production
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ 
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      })
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 