const path = require('path');

const moduleExports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: config => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  distDir: 'build',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    APP_URL: process.env.APP_URL,
    APP_API_URL: process.env.APP_API_URL,
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    RIOT_CDN_URL: process.env.RIOT_CDN_URL,
  },
};

module.exports = moduleExports;
