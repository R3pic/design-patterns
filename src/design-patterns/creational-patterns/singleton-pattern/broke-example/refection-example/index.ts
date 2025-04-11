import { Singleton } from "src/design-patterns/creational-patterns/singleton-pattern/broke-example/refection-example/singleton.ts";
import {ExampleRunner} from '@example-runner';

export default class SingletonReflectionBrokenExampleRunner extends ExampleRunner {
  static name = '싱글턴 패턴 리플렉션 취약점 예제';

  run() {
// 원본 싱글톤 인스턴스 생성
    const normalInstance = Singleton.getInstance();
    this.logger.log(`\n1. ${normalInstance.identify()}`);
    this.logger.log(`   정보: ${normalInstance.getInstanceInfo()}`);

// 리플렉션을 통한 생성자 접근으로 새 인스턴스 생성
    const constructor = Object.getPrototypeOf(normalInstance).constructor;
    const reflectionInstance = new constructor();
    reflectionInstance.identify = function () {
      return `나는 리플렉션으로 생성된 새 인스턴스입니다.`;
    };

    this.logger.log(`\n2. ${reflectionInstance.identify()}`);
    this.logger.log(`   정보: ${reflectionInstance.getInstanceInfo()}`);

// 참조 비교
    this.logger.log(`\n3. 참조 비교: ${normalInstance === reflectionInstance}`); // false

// 객체 구조 시각화
    this.logger.log(`\n4. 인스턴스 구조 비교:`);
    this.logger.log(`   - normalInstance: ${JSON.stringify(normalInstance, null, 2)}`);
    this.logger.log(`   - reflectionInstance: ${JSON.stringify(reflectionInstance, null, 2)}`);

// 상태 변경으로 독립성 확인
    this.logger.log(`\n5. 상태 변경 테스트:`);
    normalInstance.state = "원본 인스턴스 상태";
    this.logger.log(`   - normalInstance 상태: ${normalInstance.state}`);
    this.logger.log(`   - reflectionInstance 상태: ${reflectionInstance.state}`);

// reflectionInstance에 자체 state 속성 변경
    reflectionInstance.state = "리플렉션으로 생성된 인스턴스 상태";
    this.logger.log(`   - 상태 설정 후 normalInstance: ${normalInstance.state}`);
    this.logger.log(`   - 상태 설정 후 reflectionInstance: ${reflectionInstance.state}`);

// 정보 메서드를 통한 비교
    this.logger.log(`\n6. 인스턴스 정보 비교:`);
    this.logger.log(`   - normalInstance 정보: ${normalInstance.getInstanceInfo()}`);
    this.logger.log(`   - reflectionInstance 정보: ${reflectionInstance.getInstanceInfo()}`);

// 생성자 정보 확인
    this.logger.log(`\n7. 생성자 정보:`);
    this.logger.log(`   - normalInstance 생성자: ${normalInstance.constructor.name}`);
    this.logger.log(`   - reflectionInstance 생성자: ${reflectionInstance.constructor.name}`);

// 진짜 싱글톤 인스턴스인지 확인
    const anotherInstance = Singleton.getInstance();
    this.logger.log(`\n8. 싱글톤 패턴 검증:`);
    this.logger.log(`   - 새 getInstance() === normalInstance: ${anotherInstance === normalInstance}`);
    this.logger.log(`   - 새 getInstance() === reflectionInstance: ${anotherInstance === reflectionInstance}`);

// 객체의 프로토타입 체인 비교
    this.logger.log(`\n9. 프로토타입 비교:`);
    this.logger.log(`   - 두 인스턴스의 프로토타입은 같은가: ${Object.getPrototypeOf(normalInstance) === Object.getPrototypeOf(reflectionInstance)}`);
    this.logger.log(`   - 두 인스턴스 모두 Singleton의 인스턴스인가: ${normalInstance instanceof Singleton} vs ${reflectionInstance instanceof Singleton}`);
  }
}