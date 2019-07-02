import { put, takeLatest } from 'redux-saga/effects';

function* fetchNews() {
  const apiKey = '48bb6b6b50444e9ba7151ac63f780586';
  var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=' + apiKey;
  const json = yield fetch(url)
  .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}

export function* getTopUSNews() {
     yield takeLatest('GET_NEWS', fetchNews)
}