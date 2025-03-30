import type {DesignPatternRunnerBase} from '@utils/interfaces/design-pattern-runner.interface.ts';
import {Logger} from '@utils/logger.ts';

export abstract class DesignPatternRunner implements DesignPatternRunnerBase {
  protected readonly logger: Logger;

  constructor() {
    this.logger = new Logger(this.constructor);
  }

  abstract run(): void
}