const dev = process.env.NODE_ENV !== 'production';

export const client = dev ?
  'http://localhost:3000' : 'https://your-hosted-domain.com';

export const server = dev ?
  'http://localhost:1337' : 'https://your-hosted-domain.com';
