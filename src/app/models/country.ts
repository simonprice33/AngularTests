export interface ICountry {
    id: number;
    iso: string;
    iso3: string | null;
    countryName: string;
    printableName: string;
    numCode: string | null;
  }
  
  export interface ICountries {
    countries: ICountry[];
  }
  