import {ExampleRunner} from '@example-runner';

import {Service} from './service.ts';

export default class StrategyPatternAuthRunner extends ExampleRunner {
  get name(): string {
    return '전략패턴 인증 예제';
  }

  run() {
    const service = new Service("유저1");

    const requests: ([string, string] | { cookie: string })[] = [
      ["local", "localPassword"],
      { cookie: 'unknown' },
      { cookie: 'naver' },
      { cookie: 'kakao' },
      ["local", "local"],
    ]

    requests.forEach((request) => {
      try {
        if (Array.isArray(request))
          service.getImportantData(...request);
        else
          service.getImportantData(request);
      } catch (error) {
        if (error instanceof Error)
          this.logger.log(error.message);
      }
    });
  }
}


