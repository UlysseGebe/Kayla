module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-216-17-9.eu-west-1.compute.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dnq9jpjdrosfn"),
        username: env("DATABASE_USERNAME", "ghbrndvgletnnl"),
        password: env("DATABASE_PASSWORD", "b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5"),
        schema: env("DATABASE_SCHEMA", "public"),
        ssl: {
          rejectUnauthorized: false
        }
      }
    },
  },
});