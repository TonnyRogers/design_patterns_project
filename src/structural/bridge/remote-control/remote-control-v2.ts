import { RemoteControll } from './remote-control';

export class RemoteControllV2 extends RemoteControll {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + 10);
    console.log(
      `${this.device.getName()}: ${oldVolume} to ${this.device.getVolume()}`
    );
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume - 10);
    console.log(
      `${this.device.getName()}: ${oldVolume} to ${this.device.getVolume()}`
    );
  }
}
