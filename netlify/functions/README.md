# Netlify Functions

This directory contains serverless functions for the portfolio website. These functions run on Netlify's serverless infrastructure.

## Available Functions

### 1. `contact.js` - Contact Form Handler
**Endpoint:** `/.netlify/functions/contact`
**Method:** POST
**Purpose:** Handles contact form submissions

**Usage:**
```javascript
fetch('/.netlify/functions/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello! I would like to discuss a project.'
  })
});
```

### 2. `analytics.js` - Analytics Tracking
**Endpoint:** `/.netlify/functions/analytics`
**Method:** POST
**Purpose:** Tracks user interactions and page views

**Usage:**
```javascript
fetch('/.netlify/functions/analytics', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    page: '/projects',
    action: 'view_project',
    timestamp: new Date().toISOString()
  })
});
```

### 3. `project-download.js` - Project Download Handler
**Endpoint:** `/.netlify/functions/project-download?project=project-name`
**Method:** GET
**Purpose:** Handles project download requests and provides project information

**Usage:**
```javascript
fetch('/.netlify/functions/project-download?project=netflix-clone')
  .then(response => response.json())
  .then(data => {
    console.log(data.url); // GitHub repository URL
  });
```

## Function Structure

Each function follows this pattern:
```javascript
exports.handler = async (event, context) => {
  // 1. Validate HTTP method
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    // 2. Parse and validate input
    const data = JSON.parse(event.body);
    
    // 3. Process the request
    // ... your logic here ...
    
    // 4. Return response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ message: 'Success' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};
```

## Environment Variables

You can set environment variables in your Netlify dashboard:
- `SENDGRID_API_KEY` - For sending emails
- `DATABASE_URL` - For database connections
- `ANALYTICS_KEY` - For analytics services

## Local Development

To test functions locally, install Netlify CLI:
```bash
npm install -g netlify-cli
netlify dev
```

Then access functions at:
- `http://localhost:8888/.netlify/functions/contact`
- `http://localhost:8888/.netlify/functions/analytics`
- `http://localhost:8888/.netlify/functions/project-download`

## Production Deployment

Functions are automatically deployed when you push to your repository. They'll be available at:
- `https://your-site.netlify.app/.netlify/functions/contact`
- `https://your-site.netlify.app/.netlify/functions/analytics`
- `https://your-site.netlify.app/.netlify/functions/project-download` 