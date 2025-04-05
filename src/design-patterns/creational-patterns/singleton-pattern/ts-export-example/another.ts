import {singleton} from '@singleton-pattern/ts-export-example/singleton.ts';
import {Logger} from '@utils/logger.ts';

export function usingSingleton() {
  const logger = new Logger(usingSingleton);
  singleton.addCount();
  singleton.addCount();

  logger.log(`현재 카운트 : ${singleton.getCount()}`);
}