// old syntact
// module.exports = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'postgres',
//   entities: ['dist/**/*.entity.js'],
//   migrations: ['dist/migrations/*.js'],
//   cli: {
//     migrationsDir: 'src/migrations',
//   },
// };

import { DataSource } from 'typeorm';

export default new DataSource({
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: ['dist/subscribers/*{.ts,.js}'],
});
