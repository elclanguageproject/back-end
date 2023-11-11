import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE_MYSQL_DATABASE as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST as string,
    port: process.env.DATABASE_PORT as unknown as number,
  },
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, connectDB };
