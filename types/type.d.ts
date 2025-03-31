type ClassConstructor<T> = new (...args: any[]) => T;

interface DesignPatternRunnerBase {
  run(): void;
}

interface RunnerModule {
  default: ClassConstructor<ExampleRunner>;
};