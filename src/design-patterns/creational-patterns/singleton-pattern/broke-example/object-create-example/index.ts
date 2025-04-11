import {Singleton} from 'src/design-patterns/creational-patterns/singleton-pattern/broke-example/object-create-example/singleton.ts';
import {ExampleRunner} from '@example-runner';
import {Logger} from '@utils/logger.ts';

export default class SingletonObjectCreateBrokenExampleRunner extends ExampleRunner {
  static name = '싱글턴 패턴 프로토타입 취약점 예제';

  run() {
    const instance1 = Singleton.getInstance();

    this.logger.log(`\n1. ${instance1.identify()}`);
    this.logger.log(`     ${instance1.getInstanceInfo()}`);

    const instance2 = Object.create(instance1);

    instance2.logger = new Logger(instance2.name);
    instance2.identify = function () {
      return `나는 프로토타입으로 생성된 인스턴스입니다.\n
              정보: ${instance2.getInstanceInfo()}
              `;
    }
    this.logger.log(`\n2. ${instance2.identify()}`);
    this.logger.log(`\n3. 참조 비교 : ${instance1 === instance2}`);

    this.logger.log(`\n4. 인스턴스 구조 비교`);
    this.logger.log(`- instance1: ${JSON.stringify(instance1, null, 2)}`);
    this.logger.log(`- instance2: ${JSON.stringify(instance2, null, 2)}`);

    this.logger.log(`\n5. 상태 변경 테스트`);
    instance1.state = '원본 인스턴스 상태';
    this.logger.log(`- instance1: ${instance1.state}`);
    this.logger.log(`- instance2: ${instance2.state}`);

    this.logger.log(`\n6. 상태 변경 테스트2`);
    instance2.state = '복제 인스턴스 상태';
    this.logger.log(`- instance1: ${instance1.state}`);
    this.logger.log(`- instance2: ${instance2.state}`);

    this.logger.log(`\n7. 인스턴스 정보 비교`);
    this.logger.log(`- instance1: ${instance1.getInstanceInfo()}`);
    this.logger.log(`- instance2: ${instance2.getInstanceInfo()}`);
  }
}