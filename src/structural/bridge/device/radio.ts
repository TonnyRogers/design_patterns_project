import { DeviceImplementation } from './device-implementation';

export class RadioDevice implements DeviceImplementation {
  private volume = 0;
  private power = false;
  private name = 'LG SoundBar MGS13';

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
