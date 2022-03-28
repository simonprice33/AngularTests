import { ICountry } from './country';

export interface INationalGoverningBody {
  id: number;
  nationalGoverningBody: string;
  country: ICountry;
}
