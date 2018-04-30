module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'wifinder-dev'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: `${process.env.DATABASE_URL}?ssl=true`
    },
    pool: {
      min: 2,
      max: 10
    },
  }
};
