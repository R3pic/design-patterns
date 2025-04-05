import type {ExampleRunner} from 'src/example-runner/example-runner.ts';
import { ObjectUtil } from '@utils/object.ts';

import StrategyPatternConceptRunner from '@strategy-pattern/concept-example';
import StrategyPatternAuthRunner from '@strategy-pattern/auth-example';
import StrategyPatternRouteRunner from '@strategy-pattern/route-example';
import SingletonPatternConceptRunner from '@singleton-pattern/concept-example';
import StrategyPatternPaymentRunner from '@strategy-pattern/payment-example';
import SingletonPatternTypeScriptExportRunner from '@singleton-pattern/ts-export-example';
import SingletonPatternGenericRunner from '@singleton-pattern/ts-generic-example';

export class ExampleRunnerNameMapper {
  private static readonly map = new Map<ClassConstructor<ExampleRunner>, string>([
    [StrategyPatternConceptRunner, '전략 패턴 컨셉트 예제'],
    [StrategyPatternRouteRunner, '전략 패턴 경로 예제'],
    [StrategyPatternAuthRunner, '전략 패턴 인증 예제'],
    [StrategyPatternPaymentRunner, '전략 패턴 결제 예제'],

    [SingletonPatternConceptRunner, '싱글턴 패턴 컨셉트 예제'],
    [SingletonPatternTypeScriptExportRunner, '싱글턴 패턴 타입스크립트 Export 예제'],
    [SingletonPatternGenericRunner, '싱글턴 패턴 제네릭 구현 예제']
  ]);

  static getName(runner: ExampleRunner): string {
    const constructor = ObjectUtil.getConstructor(runner);
    const name = ExampleRunnerNameMapper.map.get(constructor);
    return name ? runnerNameFormat(name) : runner.constructor.name;
  }
}

function runnerNameFormat(name: string) {
  return `[ ${name} ]`;
}