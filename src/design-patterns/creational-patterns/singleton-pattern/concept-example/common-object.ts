import {Logger} from '@utils/logger.ts';

export class CommonObject {
  private static readonly logger = new Logger(CommonObject);
  constructor() {
    CommonObject.logger.log("일반 객체가 생성되었습니다.");
  }
}