import { User } from '../interfaces/user';

export class MyDbClassic {
  private static _instance: MyDbClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  public static get instance(): MyDbClassic {
    if (MyDbClassic._instance === null) {
      MyDbClassic._instance = new MyDbClassic();
    }

    return MyDbClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    this.users.forEach((user) => console.log(user));
  }
}
