import { Logger } from '@utils/logger.ts';

export class Singleton {
  private readonly logger = new Logger(Singleton);
  static #instance: Singleton | undefined;

  private constructor() {
    this.logger.log("싱글톤 객체가 생성되었습니다.");
  }

  public static get instance(): Singleton {
    if (!this.#instance) this.#instance = new Singleton();

    return this.#instance;
  }
}