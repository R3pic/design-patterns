export interface AuthStrategy {
  authenticate(...arg: unknown[]): boolean;
}