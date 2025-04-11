import {type Entry, glob} from 'fast-glob';
import { pathToFileURL } from 'url';
import path from 'node:path';
import { ExampleRunner } from 'src/example-runner/example-runner.ts';

export class ExampleRunnerLoader {
  private runnerIndexFiles: Entry[] = [];

  async load(): Promise<ExampleRunner[]> {
    this.runnerIndexFiles = glob.globSync('src/design-patterns/**/index.ts', { objectMode: true, stats: true });

    const runnerPaths = this.runnerIndexFiles.map((file) => file.path);
    const runnersPromises = runnerPaths.map(this.runnerPathToInstance);

    const runners = await Promise.all(runnersPromises);

    return runners.sort((a, b) => a.constructor.name.localeCompare(b.constructor.name));
  }

  async getLastWrittenRunner() {
    const compareDate = (a: Entry, b: Entry) => b.stats!.mtime.getTime() - a.stats!.mtime.getTime();
    const sorted = this.runnerIndexFiles.toSorted(compareDate);
    const file = sorted[0];
    return this.runnerPathToInstance(file.path);
  }

  private async runnerPathToInstance(this: void, runnerPath: string): Promise<ExampleRunner> {
    const modulePath = pathToFileURL(path.resolve(runnerPath)).href;
    const module: RunnerModule = await import(modulePath);
    const Runner = module.default;

    if (!Runner || typeof Runner !== 'function') throw new Error(`${runnerPath}는 클래스를 반환하고 있지 않습니다.`);
    if (!(module.default.prototype instanceof ExampleRunner)) throw new Error(`${runnerPath}의 default export는 DesignPatternRunner를 상속해야합니다.`);
    return new Runner();
  }
}