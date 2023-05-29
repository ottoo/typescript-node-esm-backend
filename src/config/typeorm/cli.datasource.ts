import { DataSource } from "typeorm";
import { dataSourceConfig } from "./datasource.js";

export const cliDataSource = new DataSource(dataSourceConfig);
