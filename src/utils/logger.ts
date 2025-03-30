export class Logger {
  private readonly contextName: string;
  constructor(context: Function) {
    this.contextName = context.name;
  }

  static create(context: Function) {
    return new Logger(context);
  }

  log(msg: string) {
    console.info(`[${this.contextName}] ${msg}`);
  }
}