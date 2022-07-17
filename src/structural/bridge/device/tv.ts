import { DeviceImplementation } from './device-implementation';

export class TvDevice implements DeviceImplementation {
  private volume = 0;
  private power = false;
  private name = 'SmartTV Samsung D55DS';

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume > 100) return;
    if (volume < 0) return;

    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
