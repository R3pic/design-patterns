export abstract class Singleton<T extends Singleton<T>> {
  private static _instances: Map<ClassConstructor<unknown>, unknown> = new Map();

  protected constructor() {}

  static getInstance<T extends Singleton<T>>(this: new () => T): T {
    if (!Singleton._instances.has(this)) {
      Singleton._instances.set(this, new this());
    }
    return Singleton._instances.get(this) as T;
  }
}
