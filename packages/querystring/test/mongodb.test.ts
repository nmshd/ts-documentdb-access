import { MongoDbConnection } from "@nmshd/db-mongo";
import { TestRunner } from "./TestRunner";

const connection = new MongoDbConnection(process.env.CONNECTION_STRING!);
const testRunner = new TestRunner();

beforeAll(async () => {
    await connection.connect();
    const db = await connection.getDatabase(Math.random().toString(36).substring(7));
    await testRunner.init(db);
});

afterAll(async () => await connection.close());

describe("mongodb test", () => testRunner.run());
