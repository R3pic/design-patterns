import type {AuthStrategy} from './auth-strategy.interface.ts';

import {Logger} from '@utils/logger.ts';

export class KakaoStrategy implements AuthStrategy {
  private readonly logger = new Logger(KakaoStrategy);

  authenticate(req: { cookie: string }): boolean {
    this.logger.log("인증 시도");
    if (!req?.cookie) return false;
    return req.cookie.startsWith("kakao");
  }
}