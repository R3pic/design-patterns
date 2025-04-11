import { Singleton } from "src/design-patterns/creational-patterns/singleton-pattern/broke-example/serialize-example/solution/singleton.ts";
import {ExampleRunner} from '@example-runner';

export default class SingletonSerializeBrokenSolutionExampleRunner extends ExampleRunner {
  static name = '싱글턴 패턴 직렬화 역직렬화 취약점 해결 예제';
  run() {
    const normalInstance = Singleton.getInstance();
    this.logger.log(`\n1. ${normalInstance.identify()}`);
    this.logger.log(`${normalInstance.getInstanceInfo()}`);

    const serialized = JSON.stringify(normalInstance);
    const deserializedInstance = Singleton.readResolve(serialized);

    deserializedInstance.identify = function() {
      return `나는 직렬화로 생성된 인스턴스.`;
    };
    deserializedInstance.getInstanceInfo = function() {
      return `Instance ID: ${this.id}, 
        CreatedAt: ${this.createdAt},
        Status: ${this.state}`;
    }

    this.logger.log(`\n2. ${deserializedInstance.identify()}`)
    this.logger.log(`${deserializedInstance.getInstanceInfo()}`)

    this.logger.log(`\n3. 참조 비교: ${normalInstance === deserializedInstance}`);

// 객체 구조 시각화
    this.logger.log(`\n4. 인스턴스 구조 비교:`);
    this.logger.log(`- normalInstance: ${JSON.stringify(normalInstance, null, 2)}`);
    this.logger.log(`- deserializedInstance: ${JSON.stringify(deserializedInstance, null, 2)}`);

// 상태 변경으로 독립성 확인
    this.logger.log(`\n5. 상태 변경 테스트:`);
    normalInstance.state = "원본 인스턴스 상태";
    this.logger.log(`- normalInstance 상태: ${normalInstance.state}`);
    this.logger.log(`- deserializedInstance 상태: ${deserializedInstance.state}`);

// deserializedInstance에 자체 state 속성 변경
    deserializedInstance.state = "역직렬화된 인스턴스 상태";
    this.logger.log(`- 상태 설정 후 normalInstance: ${normalInstance.state}`);
    this.logger.log(`- 상태 설정 후 deserializedInstance: ${deserializedInstance.state}`);

// 정보 메서드를 통한 비교
    this.logger.log(`\n6. 인스턴스 정보 비교:`);
    this.logger.log(`- normalInstance 정보: ${normalInstance.getInstanceInfo()}`);
    this.logger.log(`- deserializedInstance 정보: ${deserializedInstance.getInstanceInfo()}`);

// 생성자 정보 확인
    this.logger.log(`\n7. 생성자 정보:`);
    this.logger.log(`- normalInstance 생성자: ${normalInstance.constructor.name}`);
    this.logger.log(`- deserializedInstance 생성자: ${deserializedInstance.constructor.name}`);

// 진짜 싱글톤 인스턴스인지 확인
    const anotherInstance = Singleton.getInstance();
    this.logger.log(`\n8. 싱글톤 패턴 검증:`);
    this.logger.log(`- 새 getInstance() === normalInstance: ${anotherInstance === normalInstance}`);
    this.logger.log(`- 새 getInstance() === deserializedInstance: ${anotherInstance === deserializedInstance}`);

// Date 객체 손실 문제 보여주기
    this.logger.log(`\n9. 역직렬화 문제점:`);
    this.logger.log(`- 원래 createdAt은 Date 객체: ${normalInstance.createdAt instanceof Date}`);
    this.logger.log(`- 역직렬화 후 createdAt은 문자열: ${deserializedInstance.createdAt instanceof Date}`);
  }
}