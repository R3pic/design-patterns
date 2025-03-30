import chalk from 'chalk';

export class Logger {
  private readonly contextName: string;
  constructor(context: Function) {
    this.contextName = context.name;
  }

  static create(context: Function) {
    return new Logger(context);
  }

  log(msg: string) {
    const prefix = chalk.blueBright(`[${this.contextName}]`);

    console.info(`${prefix} ${msg}`);
  }
}