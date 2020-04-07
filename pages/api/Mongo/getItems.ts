import { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";
import withMongo from "../../../middleware/withMongo";

const handler = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
  var items = await db
    .collection("Items")
    .find()
    .toArray();
  // console.log(items);
  if (items.length > 0) {
    res.status(200).json(items);
  } else {
    res.status(400);
  }
};

export default withMongo(handler);
