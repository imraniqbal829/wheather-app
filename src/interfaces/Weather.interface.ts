import ICurrent from './Current.interface';
import ILocation from './Location.interface';

interface IWeather {
  current: ICurrent;
  location: ILocation;
}

export default IWeather;
