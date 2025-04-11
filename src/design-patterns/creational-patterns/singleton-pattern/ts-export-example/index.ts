import {ExampleRunner} from '@example-runner';

import { singleton } from '@singleton-pattern/ts-export-example/singleton.ts';
import {usingSingleton} from '@singleton-pattern/ts-export-example/another.ts';

export default class SingletonPatternTypeScriptExportRunner extends ExampleRunner {
  static name = '싱글턴 패턴 타입스크립트 Export 예제';

  run() {
    this.logger.log('Export로만 접근 가능한 객체는 직접 생성할 수 없으므로 싱글턴처럼 동작한다.');
    singleton.addCount();
    singleton.addCount();
    this.logger.log(`현재 카운트 : ${singleton.getCount()}`);
    this.logger.log('다른 파일에서 다시 사용합니다.');
    usingSingleton();
  }
}