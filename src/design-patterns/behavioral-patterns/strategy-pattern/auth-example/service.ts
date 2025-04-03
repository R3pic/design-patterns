import {AuthGuard} from './auth.guard.ts';
import {LocalStrategy} from './local-strategy.ts';
import {NaverStrategy} from './naver-strategy.ts';
import {KakaoStrategy} from './kakao-strategy.ts';

import {Logger} from '@utils/logger.ts';

export class Service {
  private readonly logger = new Logger(Service);

  constructor(private name: string) {}
  @AuthGuard([LocalStrategy, NaverStrategy, KakaoStrategy])
  getImportantData(id: string | { cookie: string }, password?: string) {
    this.logger.log(`${this.name}님이 아주 중요한 데이터를 획득했습니다.`);
  }
}
