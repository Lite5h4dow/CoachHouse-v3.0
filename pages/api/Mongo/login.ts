import { NextApiRequest, NextApiResponse } from "next";
import { Db } from "mongodb";

import passHash from "password-hash";
import withMongo from "../../../middleware/withMongo";
import createSession from "../../../lib/tools/createSession";

const handler = async (req: NextApiRequest, res: NextApiResponse, db: Db) => {
  var user = await db
    .collection("Users")
    .findOne({ username: req.body.username });

  if (!!user && passHash.verify(req.body.password)) {
    var currentSession = await createSession(user._id, db);
    res.status(200).json(currentSession);
  } else {
    res
      .status(404)
      .json({ message: "Username or Password do not match records" });
  }
};
export default withMongo(handler);
