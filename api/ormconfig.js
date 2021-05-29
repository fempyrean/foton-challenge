module.exports = {
  type: 'sqlite',
  database: './src/db/db.sqlite',
  migrations: ['dist/db/migrations/*.js'],
  entities: ['dist/**/*.entity.js'],
  cli: {
    migrationsDir: './src/db/migrations',
  },
};
