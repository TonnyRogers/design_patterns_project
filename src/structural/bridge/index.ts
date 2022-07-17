import { RadioDevice } from './device/radio';
import { TvDevice } from './device/tv';
import { RemoteControll } from './remote-control/remote-control';
import { RemoteControllV2 } from './remote-control/remote-control-v2';

function clientCode(abstraction: RemoteControll | RemoteControllV2): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeDown();

  abstraction.togglePower();
}

const tv = new TvDevice();
const tvController = new RemoteControll(tv);

clientCode(tvController);

const radio = new RadioDevice();
const radioControllerV2 = new RemoteControllV2(radio);

clientCode(radioControllerV2);
