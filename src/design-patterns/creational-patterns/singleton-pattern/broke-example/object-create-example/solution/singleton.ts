import {Logger} from '@utils/logger.ts';

const singletonToken = Symbol("SingletonToken");

export class Singleton {
  private readonly logger = new Logger(Singleton);
  private static instance: Singleton;
  private readonly creationToken: Symbol;

  public id: string;
  public state: string;
  public createdAt: Date;

  private constructor(token: Symbol) {
    if (token != singletonToken)
      throw new Error('Singleton 객체는 getInstance() 메소드로만 접근 가능함');

    if (Singleton.instance)
      throw new Error('Singleton 인스턴스가 존재합니다.');

    this.logger.log("싱글톤 인스턴스가 생성되었습니다.");
    this.creationToken = token;
    this.id = Math.random().toString(16).substring(2, 15);
    this.state = "Init Status";
    this.createdAt = new Date();

    if (Object.getPrototypeOf(this) !== Singleton.prototype) {
      throw new Error("Object.create()를 통한 싱글턴 인스턴스 생성이 금지됨");
    }
  }

  static {
    const originalCreate = Object.create;

    Object.create = function (...args: any[]) {
      const result = originalCreate.apply(this, args as any);

      if (args[0] instanceof Singleton && Singleton.instance) {
        new Logger(Object).warn("Object.create()로 Singleton 복제시도 발생함. 원본 반환.");
        return Singleton.instance;
      }

      return result;
    }
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(singletonToken);
      Object.freeze(Singleton.instance);
    }

    return Singleton.instance;
  }

  public isValidInstance(): boolean {
    return this.creationToken === singletonToken;
  }

  public identify(): string {
    return '나는 원본 싱글톤 인스턴스입니다.';
  }

  public getInstanceInfo(): string {
    return `Instance ID: ${this.id},
            CreatedAt: ${this.createdAt.toLocaleTimeString()},
            State: ${this.state}
            `;
  }
}