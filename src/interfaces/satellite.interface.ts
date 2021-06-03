export interface ISatellite {
  name: string;
  distance: number;
  message: Array<string>;
}

export interface ISatelliteExtra extends ISatellite{
  x: number;
  y: number;
}