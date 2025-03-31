export class ObjectUtil {
  static getConstructor<T extends Object>(instance: T): ClassConstructor<T> {
    return instance.constructor as ClassConstructor<T>;
  }
}