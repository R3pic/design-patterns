import chalk from 'chalk';
import { userInput } from '@utils/input.ts';
import {
  type ExampleRunner,
  ExampleRunnerNameMapper,
} from '@example-runner';

export class DesignPatternCli {
  constructor(private readonly runners: ExampleRunner[]) {
    if (runners.length === 0) throw new Error('실행 가능한 모듈이 없습니다.');
  }

  async select(): Promise<ExampleRunner> {
    console.info('실행할 디자인 패턴을 선택하세요:\n');
    this.runners.forEach(this.printRunnerName);

    const input = await userInput("번호를 입력해주세요 : ");
    const selected = parseInt(input, 10);
    const selectedIndex = selected - 1;

    if (selected < 1 || selected > this.runners.length) throw new RangeError('잘못된 범위 입니다.');

    const runner = this.runners.at(selectedIndex);
    if (!runner) throw new Error('디자인 패턴 실행 모듈이 존재하지 않습니다.');

    console.info(`${chalk.yellowBright(ExampleRunnerNameMapper.getName(runner))} 선택됨`);
    return runner;
  }

  separator() {
    console.info(chalk.bgGreen.greenBright('======================================='));
  }

  private printRunnerName(this: void, runner: ExampleRunner, index: number) {
    console.info(`${index + 1}. ${ExampleRunnerNameMapper.getName(runner)}`);
  }
}