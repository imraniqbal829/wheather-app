import ICondition from './Condition.interface';

interface ICurrent {
  temp_c: number;
  wind_kph: number;
  precip_mm: number;
  condition: ICondition;
}

export default ICurrent;
