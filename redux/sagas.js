import { takeLatest, put, call, select } from 'redux-saga/effects';
import * as api from '../api';
import * as types from './actions';

function* getHomeMedia() {
	try {
		const pnr = select(state => state.pnr);
		const data = yield call(api.getMediaApi, pnr);
		const sortedGenres = [];
		data.forEach(one => {
			const index = sortedGenres.indexOf(one.Genre);
			if (index === -1) {
				sortedGenres.push({
					Genre: one.Genre,
					few: []
				});
			} else {
				sortedGenres[index].few.push(one);
			}
		});
		yield put({
			type: types.ALL_MEDIA_LOADED,
			media: sortedGenres
		})
	} catch(error) {
		//error occured
	}

}

function* getMediaGenre() {
	try {
		const genre = select(state => state.currentGenre);
		const data = yield call(api.getMediaGenreApi, genre);
		yield put({
			type: types.MEDIA_GENRE_LOADED,
			data
		});
	} catch (error) {
		//error
	}
}

export default function* watcher() {
	yield takeLatest(types.GET_ALL_MEDIA, getHomeMedia);
	yield takeLatest(types.GET_MEDIA_GENRE, getMediaGenre);
}