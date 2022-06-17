module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-74-160-149.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'damfh1fvhfqbml'),
      user: env('DATABASE_USERNAME', 'zguamabfapqfmd'),
      password: env('DATABASE_PASSWORD', 'fa71bc1a3045ac79de3700c22eedd28ceb2ed14f28e24d382b8469827e7cb8d0'),
      ssl: { rejectUnauthorized: env.bool('DATABASE_SSL', false) }
    },
  },
  options: {
    ssl: env.bool('DATABASE_SSL', false),
  },
});
