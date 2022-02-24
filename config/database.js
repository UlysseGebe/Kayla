module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'ec2-54-216-17-9.eu-west-1.compute.amazonaws.com',
      port: 5432,
      database: 'dnq9jpjdrosfn',
      user: 'ghbrndvgletnnl',
      password: 'b613a3308fc834241439803358247697b31b253381ca89e130febf96b230afc5',
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
