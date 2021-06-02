import { ISatellite, ISatelliteExtra } from '../interfaces';

export const SATELLITES: Array<ISatellite> = [
  {
    name: "kenobi",
    distance: 100.0,
    message: ["este", "", "", "mensaje", ""],
  },
  {
    name: "skywalker",
    distance: 115.5,
    message: ["", "es", "", "", "secreto"]
  },
  {
    name: "sato",
    distance: 142.7,
    message: ["este", "", "un", "", ""]
  }
];

export const SATELLITES_EXTRA: Array<ISatelliteExtra> = [
  {
    ...SATELLITES[0],
    x: -500,
    y: -200
  },
  {
    ...SATELLITES[1],
    x: 100,
    y: -100
  },
  {
    ...SATELLITES[2],
    x: 500,
    y: 100
  }
];