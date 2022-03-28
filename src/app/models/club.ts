import { IAgeGroup } from './agegroups';
import { INationalGoverningBody } from './nationalgoverningbody';

export interface IClub {
  id: number;
  nationalGoverningBody: INationalGoverningBody;
  clubName: string;
}

export interface IClubTeam {
  id: number;
  club: IClub;
  ageGroupd: IAgeGroup;
  teamName: string;
}
