import {ExampleRunner} from '@example-runner';
import {AService} from '@singleton-pattern/ts-generic-example/a.service.ts';
import {BService} from '@singleton-pattern/ts-generic-example/b.service.ts';
import {CService} from '@singleton-pattern/ts-generic-example/c.service.ts';

export default class SingletonPatternGenericRunner extends ExampleRunner {
  static name = '싱글턴 패턴 제네릭 구현 예제';

  run() {
    this.logger.log('Singleton 클래스를 상속받은 AService를 테스트합니다.');
    const aService1 = AService.getInstance();
    const aService2 = AService.getInstance();

    this.compare(aService1, aService2);

    this.logger.log('Singleton 클래스를 상속받은 BService를 테스트합니다.');
    const bService1 = BService.getInstance();
    const bService2 = BService.getInstance();

    this.compare(bService1, bService2);

    this.logger.log('Singleton 클래스를 잘못 상속(Singleton<BService>)받은 CService를 테스트합니다.');
    const cService1 = CService.getInstance();
    const cService2 = CService.getInstance();
    this.logger.log('타입스크립트 컴파일 타임에 에러를 발생시키지 않는다.');

    this.compare(bService1, bService2);
  }

  private compare(a: unknown, b: unknown) {
    if (a === b)
      this.logger.log('두 객체는 동일한 객체입니다.');
    else
      this.logger.log('두 객체는 다른 객체입니다.');
  }
}