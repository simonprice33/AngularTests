import { IClub, IClubTeam } from './club';

import { IAgeGroup } from './agegroups';
import { ICountry } from './country';
import { NumberLiteralType } from 'typescript';

export interface IEvent {
  id: string;
  eventClassification: IEventClassification | null;
  ageGroup: IAgeGroup | null;
  description: string;
  eventName: string;
  startDate: string;
  endDate: string;
  eventLocation: string;
  country: ICountry | null;
  eventNumber: string;
  hostClub: IClub | null;
  santionDateTime: string;
  sanctionedBy: number | null;
  cancelled: boolean;
}

export interface IEventClassification {
  id: number;
  classification: string;
  description: string;
}
