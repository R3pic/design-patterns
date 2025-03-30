import type {DesignPatternRunner} from '@utils/design-pattern-runner.ts';

export interface RunnerModule {
  default: { new (): DesignPatternRunner }
};