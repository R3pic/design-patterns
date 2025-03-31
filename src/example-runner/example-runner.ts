import {Logger} from '@utils/logger.ts';

export abstract class ExampleRunner implements DesignPatternRunnerBase {
  protected readonly logger: Logger;
  constructor() {
    this.logger = new Logger(this.constructor);
  }

  abstract run(): void;
}