import type {AuthStrategy} from './auth-strategy.interface.ts';

import {Logger} from '@utils/logger.ts';

export class LocalStrategy implements AuthStrategy {
  private readonly logger = new Logger(LocalStrategy);

  authenticate(id: string, password: string): boolean {
    this.logger.log("인증 시도");
    if (!id || !password) return false;
    return id !== password;
  }
}

