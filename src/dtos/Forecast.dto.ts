import Condition from './Condition.dto';

export interface IForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: Condition;
  };
}

export interface IForecast {
  forecastday: IForecastDay[];
}
