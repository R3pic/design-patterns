import { ExampleRunnerLoader } from '@example-runner';
import { DesignPatternCli } from '@cli';

async function main() {
  const loader = new ExampleRunnerLoader();
  const cli = await DesignPatternCli.create(loader);

  while (1) {
    try {
      cli.separator();
      const runner = await cli.select();
      cli.separator();
      runner.run();
    } catch (e) {
      if (e instanceof Error) console.error(e.message)
    }
  }
}

main().catch(console.error);