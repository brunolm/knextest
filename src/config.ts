import * as url from 'url';

export default {
  knex: {
    name: 'global',
    client: 'pg',
    debug: false,
    connection: {
      multipleStatements: true,
      host: url.parse(process.env.DB_PORT).hostname,
      user: process.env.DB_USER || process.env.DB_ENV_POSTGRES_USER,
      port: parseInt(url.parse(process.env.DB_PORT).port, 10),
      password: process.env.DB_PASSWORD || process.env.DB_ENV_POSTGRES_PASSWORD,
      database: process.env.DB_DATABASE || process.env.DB_ENV_POSTGRES_DB,
    },
    migrations: {
      directory: `${__dirname}/../db/migrations`,
    },
  },
};
