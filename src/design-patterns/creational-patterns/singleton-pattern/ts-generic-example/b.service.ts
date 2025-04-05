import {Singleton} from '@singleton-pattern/ts-generic-example/singleton.ts';
import {Logger} from '@utils/logger.ts';

export class BService extends Singleton<BService> {
  private readonly logger = new Logger(BService);

  constructor() {
    super();
    this.logger.log('BService 인스턴스가 생성되었습니다.');
  }

  doB() {
    this.logger.log('B');
  }
}