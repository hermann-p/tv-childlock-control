import SamsungRemote from "samsung-remote";
import { volumeUp } from "../server/commands/commands";

const remote = new SamsungRemote({
  ip: process.env.TV_IP || 'xxx.xxx.xxx.xxx' // required: IP address of your Samsung Smart TV
});

remote.isAlive((err: any) => {
  if (err) {
    console.log('TV is offline');
  } else {
    console.log('TV is ALIVE!');
    volumeUp(remote, () => null, () => null);
  }
});

