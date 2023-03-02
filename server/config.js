module.exports = {
    databaseUrl: process.env.ADDRESS_DB_URL || 'mongodb://film:film@localhost:27017/film-catalog',
    port: process.env.PORT || 5000,
};