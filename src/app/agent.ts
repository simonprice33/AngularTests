import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IClub, IClubTeam } from './models/club';
import { IEvent } from './models/event';
import { IItc, IItcRoserMember } from './models/itc';
import { IClubMemberPosition, IRosterMember } from './models/roster';


// // axios.interceptors.request.use(
// //   (config) => {
// //     const token = window.localStorage.getItem('jwt');
// //     if (token) config.headers.Authorization = `Bearer ${token}`;
// //     return config;
// //   },
// //   (error) => {
// //     return Promise.reject(error);
// //   }
// // );

axios.defaults.baseURL = 'https://localhost:5001';

const responseBody = (response: AxiosResponse) => response;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body = {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body = {}) =>
    axios.put(url, body).then(sleep(1000)).then(responseBody),
  delete: (url: string) =>
    axios.delete(url).then(sleep(1000)).then(responseBody),
  deleteWithBody: (url: string, body = {}) =>
    axios.delete(url, body).then(sleep(1000)).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append('File', file);
    return axios
      .post(url, formData, {
        headers: { 'content-type': 'multipart/form-data' },
      })
      .then(responseBody);
  },
};

const Events = {
  list: () => requests.get('/events'),
  details: (id: string) => requests.get(`/event/${id}`),
  create: (event: IEvent) => requests.post('/event/', event),
  update: (event: IEvent) => requests.put(`/event/${event.id}`, event),
  delete: (id: string) => requests.delete(`/event/{${id}}`),
};

const Itc = {
  list: () => requests.get(''),
  details: (itcId: string) => requests.get(`/get-itc?ItcId=${itcId}`),
  create: (itc: IItc) =>
    requests.post('/create-itc', {
      clubId: itc.clubTeam.club.id,
      eventId: itc.event.id,
      teamSignatoryId: itc.teamSignatory.id,
      issuingCountryId: itc.country.id,
    }),
  addRosterMember: (itcRosterMember: IItcRoserMember) =>
    requests.post('/itc-roster-member', {
      itcIt: itcRosterMember.itc.id,
      clubTeamId: itcRosterMember.rosterMember.clubTeam.id,
      rosterMemberId: itcRosterMember.rosterMember.id,
    }),
  deleteRosterMember: (itcId: string, itcRosterMemberId: string) =>
    requests.deleteWithBody('/itc-roster-member', {
      itcId: itcId,
      itcRosterMemberId: itcRosterMemberId,
    }),
  submitItc: (itcId: string) => requests.post('/submit-itc', { itcId: itcId }),
};

const club = {
  create: (club: IClub) =>
    requests.post('/club', {
      clubName: club.clubName,
      nationalGoverningBodyId: club.nationalGoverningBody.id,
    }),
  Edit: (club: IClub) =>
    requests.put('/club', { clubId: club.id, clubName: club.clubName }),
  createClubMemberPosition: (clubMemberPosition: IClubMemberPosition) =>
    requests.post('/club-member-position', {
      rosterMemberId: clubMemberPosition.rosterMember,
      positionId: clubMemberPosition.position.id,
    }),
  deleteClubMemberPosition: (clubMemberPosition: IClubMemberPosition) =>
    requests.post('/club-member-position', {
      rosterMemberId: clubMemberPosition.rosterMember,
      positionId: clubMemberPosition.position.id,
    }),
};

const clubTeam = {
  create: (clubTeam: IClubTeam) =>
    requests.post('​/create-club-team', {
      ageGroupId: clubTeam.ageGroupd.id,
      clubId: clubTeam.club.id,
      teamName: clubTeam.teamName,
    }),
};

const roster = {
  create: (roster: IRosterMember) =>
    requests.post('/create-roster-member', {
      clubTeamId: roster.clubTeam.id,
      nationalityId: roster.country.id,
      firstName: roster.firstName,
      lastName: roster.lastName,
      dateOfBirth: roster.dateOfBirth,
      firstJerseyNumber: roster.firstJerseyNumbrer,
      secondJerseyNumber: roster.secondJerseyNUmber,
      gender: roster.genger,
      licenseNumber: roster.licenseNumber,
      isAgeOption: roster.isAgeOption,
      positionId: roster.positionId,
    }),
};

export default {
  Events,
  Itc,
  club,
  clubTeam,
  roster,
};
