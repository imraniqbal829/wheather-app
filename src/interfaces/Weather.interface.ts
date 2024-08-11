import Current from './Current.interface';
import Location from './Location.interface';

interface Weather {
  current: Current;
  location: Location;
}

export default Weather;
