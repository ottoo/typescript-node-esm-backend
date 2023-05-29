import { DataSource } from 'typeorm';
import { dataSourceConfig } from './datasource.js';

const postgresDataSource = new DataSource(dataSourceConfig);

export const dataSource = await postgresDataSource.initialize();
