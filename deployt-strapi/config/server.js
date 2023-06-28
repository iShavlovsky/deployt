module.exports = ({ env }) => ({
  // url: env("PUBLIC_URL", "http://localhost:1337"),
  url: env('PUBLIC_URL', 'https://api.deployteam.ru'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  emitErrors: false,
  proxy: env.bool('IS_PROXIED', true),
  cron: {
    enabled: env.bool('CRON_ENABLED', false),
  },
});
