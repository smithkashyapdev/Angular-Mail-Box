export class Email {
  public id: string;
  public type: string;
  public to: string;
  public fromName: string;
  public fromEmail: string;
  public date: string;
  public subject: string;
  public read: number;
  public message: string;

  constructor(
    id: string,
    type: string,
    to: string,
    fromName: string,
    fromEmail: string,
    date: string,
    subject: string,
    read: number,
    message: string
  ) {
    this.id = id;
    this.type = type;
    this.to = to;
    this.fromName = fromName;
    this.fromEmail = fromEmail;
    this.date = date;
    this.subject = subject;
    this.read = read;
    this.message = message;
  }
}
