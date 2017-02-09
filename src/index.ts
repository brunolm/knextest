import * as knex from 'knex';

import config from './config';

async function start() {
  const db = knex(config.knex);
  await db.migrate.latest();

  try {
    await db.transaction(async (trx) => {
      await db('user').insert({ name: 'Saitama' });
      await db('user').insert({ name: 'Genos' });

      await trx.commit();
    });
  }
  catch (err) {
    console.log('Rollback', err);
  }

  const list = await db('user');

  console.log('list', list);
}

start();
