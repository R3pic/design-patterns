import {Logger} from '@utils/logger.ts';

export class Singleton {
  private readonly logger = new Logger(Singleton);
  static #instance: Singleton;
  static #isCreating: boolean = false;

  public id?: string;
  public state?: string;
  public createdAt?: Date;

  private constructor() {
    if (Singleton.#instance && !Singleton.#isCreating) {
      this.logger.warn('리플렉션을 통한 생성 시도 감지. 기존 인스턴스 반환.');
      return Singleton.#instance;
    }

    this.logger.log("싱글톤 인스턴스가 생성되었습니다.");
    this.id = Math.random().toString(16).substring(2, 15);
    this.state = "Init Status";
    this.createdAt = new Date();
  }

  public static getInstance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#isCreating = true;
      Singleton.#instance = new Singleton();
      Singleton.#isCreating = false;
    }

    return Singleton.#instance;
  }

  public identify(): string {
    return '나는 원본 싱글톤 인스턴스입니다.';w
  }

  public getInstanceInfo(): string {
    return `Instance ID: ${this.id},
            CreatedAt: ${this.createdAt?.toLocaleTimeString()},
            State: ${this.state}
            `;
  }
}