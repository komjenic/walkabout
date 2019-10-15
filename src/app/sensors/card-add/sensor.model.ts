export interface Sensor {
  id: number;
  name: string;
  image: string;
  path: string;
  unitSymbol: string | null;
  value: string | boolean;
  lastUpdate: number;
  type: string;
}
