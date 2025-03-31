import chalk from 'chalk';
import {ExampleRunner, ExampleRunnerNameMapper} from '@example-runner';

export class Message {
  static SELECT_DESIGN_PATTERN = '실행할 디자인 패턴을 선택하세요:\n'
  static WRONG_RANGE = '잘못된 범위 입니다.';
  static RUNNER_MODULE_NOT_EXIST = '디자인 패턴 실행 모듈이 존재하지 않습니다.';
  static SELECTED_MODULE = (runner: ExampleRunner) =>
    `${chalk.yellowBright(ExampleRunnerNameMapper.getName(runner))} 선택됨`;
  static SEPARATOR = chalk.bgGreen.greenBright('=======================================');
}