import type {DesignPatternRunner} from '@utils/design-pattern-runner.ts';
import {userInput} from '@utils/input.ts';

export class DesignPatternCli {
  constructor(
    private readonly runners: DesignPatternRunner[],
  ) {
    if (runners.length === 0) throw new Error('실행 가능한 모듈이 없습니다.');
  }

  async select(): Promise<DesignPatternRunner> {
    console.log('실행할 디자인 패턴을 선택하세요:\n');
    this.runners.forEach(this.printRunnerName);

    const input = await userInput("번호를 입력해주세요 : ");
    const selectedIndex = parseInt(input, 10) - 1;

    if (selectedIndex <= 0 || selectedIndex > this.runners.length - 1) throw new RangeError('잘못된 범위 입니다.');

    const runner = this.runners.at(selectedIndex);
    if (!runner) throw new Error('디자인 패턴 실행 모듈이 존재하지 않습니다.');

    return runner;
  }

  private printRunnerName(runner: DesignPatternRunner, index: number) {
    console.log(`${index + 1}. ${runner.constructor.name}`);
  }
}