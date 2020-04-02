import { Db } from "mongodb";
import userSession from "../userSession";

const createSession = async (userID: String, db: Db) => {
  var currentSession = new userSession(null, userID);
  db.collection("UserSessions").deleteMany({ userID: currentSession.userID });

  currentSession.sessionID = await (
    await db
      .collection("UserSessions")
      .insertOne({ userID: currentSession.userID })
  ).ops[0]._id;

  return currentSession;
};

export default createSession;
