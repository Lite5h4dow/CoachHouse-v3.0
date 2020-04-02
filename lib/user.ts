class user {
  constructor(
    _Id: String,
    Username: String,
    Forename?: String,
    Surname?: String,
    Email?: String
  ) {
    this._id = _Id;
    this.username = Username;
    this.forename = Forename;
    this.surname = Surname;
    this.email = Email;
  }
  _id: String;
  username: String;
  forename?: String;
  surname?: String;
  email?: String;
}

export default user;
