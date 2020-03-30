import { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";

const handler = (req: NextApiRequest, res: NextApiResponse, db: Db) => {
  db.collection("CurrentSpecials").find({});
};
