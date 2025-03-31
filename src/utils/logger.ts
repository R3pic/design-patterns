import chalk from 'chalk';

export class Logger {
  private readonly prefix?: string;
  constructor(context?: Function) {
    if (context)
      this.prefix = chalk.blueBright(`[${context.name}]`);
  }

  static create(context: Function) {
    return new Logger(context);
  }

  log(msg: string) {
    if (!this.prefix) console.info(msg);
    else console.info(`${this.prefix} ${msg}`);
  }
}