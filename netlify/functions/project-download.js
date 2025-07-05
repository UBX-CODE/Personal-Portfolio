exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Get project name from query parameters
    const { project } = event.queryStringParameters || {};
    
    if (!project) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Project parameter is required' })
      };
    }

    // Define available projects and their download URLs
    const projects = {
      'netflix-clone': {
        url: 'https://github.com/yourusername/netflix-clone',
        description: 'Netflix Clone - React & Firebase'
      },
      'twitter-clone': {
        url: 'https://github.com/yourusername/twitter-clone',
        description: 'Twitter Clone - React & Node.js'
      },
      'uber-clone': {
        url: 'https://github.com/yourusername/uber-clone',
        description: 'Uber Clone - React Native & Firebase'
      },
      'facebook-clone': {
        url: 'https://github.com/yourusername/facebook-clone',
        description: 'Facebook Clone - React & GraphQL'
      }
    };

    const projectData = projects[project];
    
    if (!projectData) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Project not found' })
      };
    }

    // Log the download request
    console.log('Project download requested:', { 
      project, 
      timestamp: new Date().toISOString(),
      userAgent: event.headers['user-agent'],
      ip: event.headers['client-ip']
    });

    // Return the project information
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        project,
        url: projectData.url,
        description: projectData.description,
        message: 'Redirecting to project repository...'
      })
    };

  } catch (error) {
    console.error('Error processing project download:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 