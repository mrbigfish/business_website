import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'superagent';
import { SearchResults } from 'semantic-ui-react';
/**
 * Upon calling this function from callGetWeather(), it uses the location
 * parameter to construct api and call the 'request' function, retrieving
 * the data to be used back in the callGetWeather() function below.
 * @param {
 * } location 
 */
function getWeather(location) {
  const apiKey ='40412b0b8d65fc295f2ef4785ebdcd37';
  const url = `api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  return request 
          .get(url)
          .then((data) => {
            return JSON.parse(data.text);
        })
}
/**
 * Once this function gets called, we take in the location that was passed in
 * and then we call the function getWeather()
 */
function* callGetWeather({ location, resolve, reject }) {
  const result = yield call(getWeather, location);
  console.log(result);
  if (SearchResults.query.results) {
    yield put({type: 'FETCH_WEATHER_DONE', result});
    yield call(resolve);
  } else {
    yield call(reject, {location: 'Error retrieving data for location requested!'})
  }
}
/**
 * this function "listens" for FETCH WEATHER to be called by the UI (user)
 * this function happens in the background (even if there is an on-going fetch)
 * Upon user call, the function calls the callGetWeather() function
 * */ 
export function* getWeatherByLocation() {
  yield takeLatest('FETCH_WEATHER', callGetWeather);
}
