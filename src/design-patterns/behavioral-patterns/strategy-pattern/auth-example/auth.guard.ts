import {AuthContext} from './auth-context';
import type {AuthStrategy} from './auth-strategy.interface';

import {Logger} from '@utils/logger.ts';

export function AuthGuard(strategies: (new () => AuthStrategy)[]): MethodDecorator {
  const logger = new Logger(AuthGuard);

  return function (
    target: Object,
    propertyKey: string | Symbol,
    descriptor: TypedPropertyDescriptor<any>
  ){

    const originalMethods = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      for (const strategy of strategies) {
        const context = new AuthContext(new strategy());
        const result = context.authenticate(...args);
        if (result) {
          logger.log(`${strategy.name} 인증 성공`);
          return originalMethods.apply(this, args);
        }
        else
          logger.log(`${strategy.name} 인증 실패`);
      }
      throw new Error("404: 인증에 실패했습니다.");
    }

    return descriptor;
  }
}