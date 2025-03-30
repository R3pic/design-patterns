import type {RouteStrategy} from '@strategy-pattern/route-example/route-strategy.interface.ts';

export class Navigator {
  constructor(
    private routeStrategy: RouteStrategy
  ) {}

  setStrategy(routeStrategy: RouteStrategy) {
    this.routeStrategy = routeStrategy;
  }

  route(from: string, to: string) {
    this.routeStrategy.buildRoute(from, to);
  }
}