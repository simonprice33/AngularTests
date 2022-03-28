import { IClubTeam } from './club';
import { ICountry } from './country';
import { IEvent } from './event';
import { INationalGoverningBody } from './nationalgoverningbody';
import { IRosterMember } from './roster';
import { IncomingHttpStatusHeader } from 'http2';

export interface IItc {
  id: number;
  clubTeam: IClubTeam;
  event: IEvent;
  teamSignatory: IRosterMember;
  country: ICountry;
  status: IStatus;
}

export interface IItcRoserMember {
  id: number;
  itc: IItc;
  rosterMember: IRosterMember;
}

export interface IStatus {
  id: number;
  status: string;
}

export interface IItcSignOff {
  firstName: string;
  lastName: string;
  action: string;
  nationalGoverningBody: INationalGoverningBody;
  actionDate: string;
  notes: string;
}

export interface ITtcDetails {
  itc: IItc;
  rosterMember: IRosterMember[];
  ItcSignatories: IItcSignOff[];
}
