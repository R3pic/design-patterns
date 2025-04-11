import type {ExampleRunner} from 'src/example-runner/example-runner.ts';
import { ObjectUtil } from '@utils/object.ts';

export class ExampleRunnerNameMapper {
  static getName(runner: ExampleRunner): string {
    const constructor = ObjectUtil.getConstructor(runner);
    return runnerNameFormat(runner.constructor.name);
  }
}

function runnerNameFormat(name: string) {
  return `[ ${name} ]`;
}