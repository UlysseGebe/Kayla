module.exports = ({ env }) => ({
    url: env("https://kayla-project.herokuapp.com/"),
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["DATABASE_URL"]),
    },
});