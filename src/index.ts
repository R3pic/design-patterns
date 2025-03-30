import { DesignPatternLoader } from '@utils/design-pattern-loader.ts';
import { DesignPatternCli } from '@utils/design-pattern-cli-interactor.ts';

async function main() {
  const loader = new DesignPatternLoader();
  const cli = new DesignPatternCli(await loader.load());

  const runner = await cli.select();

  console.info(`${runner.constructor.name}을 실행중....`);
  console.info('========================================');
  runner.run();
}

main().catch(console.error);