import { glob } from 'fast-glob';
import { pathToFileURL } from 'url';
import path from 'node:path';
import type { RunnerModule } from '@utils/interfaces';
import { DesignPatternRunner } from '@utils/design-pattern-runner.ts';

export class DesignPatternLoader {
  load() {
    const runnerPaths = glob.globSync('src/design-patterns/**/index.ts');
    const runners = runnerPaths.map(this.runnerPathToInstance);
    return Promise.all(runners);
  }

  private async runnerPathToInstance(this: void, runnerPath: string) {
    const modulePath = pathToFileURL(path.resolve(runnerPath)).href;
    const module: RunnerModule = await import(modulePath);
    const Runner = module.default;

    if (!Runner || typeof Runner !== 'function') throw new Error(`${runnerPath}는 클래스를 반환하고 있지 않습니다.`);
    if (!(module.default.prototype instanceof DesignPatternRunner)) throw new Error(`${runnerPath}의 default export는 DesignPatternRunner를 상속해야합니다.`);
    return new Runner();
  }
}