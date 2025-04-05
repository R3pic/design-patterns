import {Logger} from '@utils/logger.ts';

class Singleton {
  private count = 0;
  private readonly logger = new Logger(Singleton);

  addCount() {
    this.logger.log('addCount 메소드 실행');
    return this.count++;
  }

  getCount() {
    return this.count;
  }
}

export const singleton = new Singleton();