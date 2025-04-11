import {Logger} from '@utils/logger.ts';

export class Singleton {
  private readonly logger = new Logger(Singleton);
  private static instance: Singleton;

  public id: string;
  public state: string;
  public createdAt: Date;

  private constructor() {
    this.logger.log("싱글톤 인스턴스가 생성되었습니다.");
    this.id = Math.random().toString(16).substring(2, 15);
    this.state = "Init Status";
    this.createdAt = new Date();
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance)
      Singleton.instance = new Singleton();

    return Singleton.instance;
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