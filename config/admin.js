module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39deab345f5419b5baeb12da4f86ded7'),
  },
});
