import { combineReducers } from 'redux';

//reduceri
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;
