import { NextApiRequest, NextApiResponse } from "next";

const withMongo = handler => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(process.env.mongodb);

  try {
    await client.connect();
    const db = client.db(process.env.mongodb_name, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.info("MongoDB Connection Opened");
    await handler(req, res, db);
  } catch (err) {
    console.error(`MongoDB Connection Failed: ${err}`);
  } finally {
    client.close();
  }
};

export default withMongo;
