import { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";
import { isNullOrUndefined } from "util";
import withMongo from "../../../middleware/withMongo";

const handler = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
  var user = await db.collection("Users").findOne({ _id: req.body.userID });

  var userData = new userData(
    user._id,
    user.username,
    user.forename,
    user.surname,
    user.email
  );

  if (!isNullOrUndefined(user)) {
    res.status(200).json(userData);
  } else {
    res.status(404);
  }
};

export default withMongo(handler);
