class userSession {
  constructor(sessionid?: String, userid?: String) {
    this.sessionID = sessionid;
    this.userID = userid;
  }
  userID?: String;
  sessionID?: String;
}
export default userSession;
