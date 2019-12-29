import * as types from './types';

const initState = {
	userName: '',
	pnr: 0,
	seatNumber: '',
	drawerVisible: false,
	selectedGenres: [],
	selectedLanguages: [],
	currentRoute: '',
	allMedia: [],
	mediaName: '',
	mediaUrl: '',
	mediaComments: [],
	mediaPosterUrl: '',
	mediaViews: 0,
	mediaLikes: 0,
	currentGenre: '',
	currentLanguage: '',
	notifications: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case types.SHOW_DRAWER:
			return Object.assign({}, state, {
				drawerVisible: true
			});
		case types.HIDE_DRAWER:
			return Object.assign({}, state, {
				drawerVisible: false
			});
		case types.VERIFY_USER_DETAILS:
			return state;
		case types.USER_DETAILS_VERIFIED:
			return Object.assign({}, state, {
				userName: action.details.name,
				seatNumber: action.details.seat,
				pnr: action.details.pnr
			});
		case types.GENRE_PREFERENCES_ADDED:
			return Object.assign({}, state, {
				genres: action.genres
			});
		case types.CHANGE_CURRENT_ROUTE:
			return Object.assign({}, state, {
				currentRoute: action.route
			});
		case types.GET_MEDIA:
			return state;
		case types.MEDIA_LOADED:
			return Object.assign({}, state, {
				mediaName: action.mediaName,
				mediaUrl: action.mediaUrl,
				mediaComments: action.mediaComments,
				mediaViews: action.mediaViews,
				mediaLikes: action.mediaLikes
			});
		case types.ADD_LIKE:
			return Object.assign({}, state, {
				mediaLikes: state.mediaLikes + 1
			});
		case types.REMOVE_LIKE:
			return Object.assign({}, state, {
				mediaLikes: state.mediaLikes - 1
			});
		case types.ADD_COMMENT:
			return Object.assign({}, state, {
				mediaComments: state.mediaComments.push(action.comment)
			});
		case types.RECEIVED_NOTIFICATION:
			return Object.assign({}, state, {
				notifications: state.notifications.push(action.notice)
			});
		case types.ALL_MEDIA_LOADED:
			return Object.assign({}, state, {
				allMedia: action.allMedia
			});
		case types.GET_MEDIA_GENRE:
			return state;
		case types.MEDIA_GENRE_LOADED:
			return Object.assign({}, state, {
				allMedia: action.allMedia
			});
		default:
			return state;
	}
};

export default reducer;