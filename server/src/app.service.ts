import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AppService {

  private bddPool : Pool = new Pool({
    max: 20,
    connectionString: 'postgres://postgres:postgres@localhost:5432/postgres',
    idleTimeoutMillis: 30000
  });

  getHello(): string {
    return 'Hello World!';
  }

  async getOffersAsync() {
    const client = await this.bddPool.connect();

    const sql = "SELECT * FROM offer";
    const { rows } = await client.query(sql);
    return rows;
  }
}
