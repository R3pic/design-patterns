export interface RouteStrategy {
  buildRoute(from: string, to: string): void;
}