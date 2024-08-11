import Condition from './Condition.interface';

interface Current {
  temp_c: number;
  wind_kph: number;
  precip_mm: number;
  condition: Condition;
}

export default Current;
