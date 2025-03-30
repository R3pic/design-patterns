import type {Strategy} from '@design-pattern/behavioral-patterns/strategy-pattern/concept-example/strategy.interface.ts';

export class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}