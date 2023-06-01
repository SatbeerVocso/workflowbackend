module.exports = ({ env }) => ({
  // Other plugin configurations
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'), // Set the SendGrid API key in your environment variables
    },
    settings: {
      defaultFrom: 'rahul@vocso.com',
      defaultReplyTo: 'rahul@vocso.com',
    },
  },
});
