module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('API_URL', "https://kayla-project.herokuapp.com/"),
  admin: {
    url: env('ADMIN_URL', "https://kayla-project.herokuapp.com/admin"), 
    auth: {
      secret: env('ADMIN_JWT_SECRET', '43c664ded174acb0e15c62217195062d'),
    },
  },
  app: {
    keys: env.array("APP_KEYS", ["DATABASE_URL"]),
  },
});
