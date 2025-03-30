import type {AuthStrategy} from './auth-strategy.interface';

export class AuthContext {
  constructor(
    private strategy: AuthStrategy,
  ) {}

  setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  authenticate(...args: unknown[]) {
    return this.strategy.authenticate(...args);
  }
}
