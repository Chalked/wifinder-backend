
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'wifinder-dev'
    }
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
    },
};
