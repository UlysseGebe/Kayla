const parse = require('pg-connection-string').parse;
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: parse(env('DATABASE_URL', 'postgres://ghbrndvgletnnl:b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5@ec2-54-216-17-9.eu-west-1.compute.amazonaws.com:5432/dnq9jpjdrosfn')).host,
      port: parse(env('DATABASE_URL', 'postgres://ghbrndvgletnnl:b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5@ec2-54-216-17-9.eu-west-1.compute.amazonaws.com:5432/dnq9jpjdrosfn')).port,
      database: parse(env('DATABASE_URL', 'postgres://ghbrndvgletnnl:b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5@ec2-54-216-17-9.eu-west-1.compute.amazonaws.com:5432/dnq9jpjdrosfn')).database,
      user: parse(env('DATABASE_URL', 'postgres://ghbrndvgletnnl:b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5@ec2-54-216-17-9.eu-west-1.compute.amazonaws.com:5432/dnq9jpjdrosfn')).user,
      password: parse(env('DATABASE_URL', 'postgres://ghbrndvgletnnl:b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5@ec2-54-216-17-9.eu-west-1.compute.amazonaws.com:5432/dnq9jpjdrosfn')).password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
