import { Singleton } from 'src/design-patterns/creational-patterns/singleton-pattern/broke-example/object-create-example/solution/singleton.ts';
import {ExampleRunner} from '@example-runner';

export default class SingletonObjectCreateBrokenSolutionExampleRunner extends ExampleRunner {
  static name = '싱글턴 패턴 프로토타입 취약점 해결 예제';

  run() {
    const instance1 = Singleton.getInstance();
    
    this.logger.log(`\n1. ${instance1.identify()}`);
    this.logger.log(`     ${instance1.getInstanceInfo()}`);

    const instance2 = Object.create(instance1);

    try {
      this.logger.log(`\n1. ${instance2.identify()}`);
      this.logger.log(`     ${instance2.getInstanceInfo()}`);
      this.logger.log(`     ${instance2.isValidInstance()}`);
    } catch (e: any) {
      console.error(`Error: ${e.message}`);
    }

    this.logger.log(`\n2. ${instance2.identify()}`);
    this.logger.log(`\n3. 참조 비교 : ${instance1 === instance2}`);

    this.logger.log(`\n4. 인스턴스 비교`);
    const instance3 = Singleton.getInstance();
    this.logger.log(`- instance1-2: ${instance1 === instance2}`);
    this.logger.log(`- instance2-3: ${instance2 === instance3}`);   
  }
}