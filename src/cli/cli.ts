import chalk from 'chalk';
import { userInput } from '@utils/input.ts';
import {
  type ExampleRunner, ExampleRunnerLoader,
  ExampleRunnerNameMapper,
} from '@example-runner';

import { Message } from './message';

export class DesignPatternCli {
  private constructor(
    private readonly runners: ExampleRunner[],
    private readonly lastWrittenRunner: ExampleRunner,
  ) {
    if (runners.length === 0) throw new Error('실행 가능한 모듈이 없습니다.');
  }

  static async create(exampleRunnerLoader: ExampleRunnerLoader) {
    const runners = await exampleRunnerLoader.load();
    const lastRunner = await exampleRunnerLoader.getLastWrittenRunner();
    const cli = new DesignPatternCli(runners, lastRunner);
    return cli;
  }

  async select(): Promise<ExampleRunner> {
    console.info(Message.SELECT_DESIGN_PATTERN);
    console.info(`0. 가장 최근에 작성된 패턴 ${ExampleRunnerNameMapper.getName(this.lastWrittenRunner)}`);
    this.runners.forEach(this.printRunnerName);

    const input = await userInput("번호를 입력해주세요 : ");
    const selected = parseInt(input, 10);
    const selectedIndex = selected - 1;

    if (selected === 0) return this.lastWrittenRunner;

    if (selected < 1 || selected > this.runners.length) throw new RangeError(Message.WRONG_RANGE);

    const runner = this.runners.at(selectedIndex);
    if (!runner) throw new Error(Message.RUNNER_MODULE_NOT_EXIST);

    console.info(Message.SELECTED_MODULE(runner));
    return runner;
  }

  separator() {
    console.info(Message.SEPARATOR);
  }

  private printRunnerName(this: void, runner: ExampleRunner, index: number) {
    console.info(`${index + 1}. ${ExampleRunnerNameMapper.getName(runner)}`);
  }
}