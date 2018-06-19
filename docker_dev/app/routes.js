var routes = [
  { target: process.env.SIEP_LARAVEL_API, path: '/api', target_path: '/api' },
  { target: process.env.SIEP_AUTH_API, path: '/auth', target_path: '/' }
];

module.exports = routes;
