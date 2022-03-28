import { IClubTeam } from './club';
import { ICountry } from './country';

export interface IRosterMember {
  id: number;
  clubTeam: IClubTeam;
  country: ICountry;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  firstJerseyNumbrer: number;
  secondJerseyNUmber: number;
  genger: string;
  licenseNumber: string;
  isAgeOption: boolean;
  isGuest: boolean;
  positionId: number;
}

export interface IPosition {
  id: number;
  description: string;
}

export interface IClubMemberPosition {
  id: number;
  rosterMember: IRosterMember;
  position: IPosition;
}
