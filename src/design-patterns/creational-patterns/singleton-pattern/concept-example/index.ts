import {Singleton} from './singleton.ts';
import {CommonObject} from './common-object.ts';

import {ExampleRunner} from '@example-runner';

export default class SingletonPatternConceptRunner extends ExampleRunner {
  static name = '싱글턴 패턴 컨셉트 예제';

  run() {
    this.logger.log("=============싱글톤 사용=============");
    const instance1 = Singleton.instance;
    const instance2 = Singleton.instance;
    this.compare(instance1, instance2);

    this.logger.log("=============일반 객체 사용=============");
    const instance3 = new CommonObject();
    const instance4 = new CommonObject();
    this.compare(instance3, instance4);

    // 리플렉션 사용시 싱글턴이 깨질 수 있음
    // const instance5 = Reflect.construct(Singleton, []);
    // console.info(instance5);
    // const instance6 = Reflect.construct(Singleton, []);
    // console.info(instance6);
  }

  private compare(a: unknown, b: unknown) {
    this.logger.log("두 객체는 동일한 객체인가요?");
    if (a === b)
      this.logger.log("=> 두 객체는 동일한 인스턴스 입니다.");
    else
      this.logger.log("=> 두 객체는 다른 인스턴스입니다.");
  }
}


