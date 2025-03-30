import {Service} from './service.ts';

import {DesignPatternRunner} from '@utils/design-pattern-runner.ts';

export default class StrategyPatternAuthExample extends DesignPatternRunner {
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


