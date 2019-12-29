import * as types from './types';

export const showDrawerAction = () => ({
	type: types.SHOW_DRAWER
});

export const hideDrawerAction = () => ({
	type: types.HIDE_DRAWER
});

export const verifyUserDetailsAction = () => ({
	type: types.VERIFY_USER_DETAILS,
});

export const userDetailsVerifiedAction = (name, seat) => ({
	type: types.USER_DETAILS_VERIFIED, 
	details: {
		name,
		seat
	}
}); 

export const genrePreferencesAddedAction = genres => ({
	type: types.GENRE_PREFERENCES_ADDED, genres
});

export const changeCurrentRouteAction = route => ({
	type: types.CHANGE_CURRENT_ACTION, route
});

export const getMediaAction = () => ({
	type: types.GET_MEDIA
});

export const mediaLoadedAction = (mediaName, 
	mediaUrl, mediaPosterUrl, mediaComments, mediaLikes, mediaViews) => ({
	type: types.MEDIA_LOADED,
	mediaName,
	mediaUrl,
	mediaPosterUrl,
	mediaComments,
	mediaLikes,
	mediaViews
});

export const addCommentAction = comment => ({
	type: types.ADD_COMMENT, comment
});

export const addLikeAction = () => ({
	type: types.ADD_LIKE
});

export const removeLikeAction = () => ({
	type: types.REMOVE_LIKE
});

export const receivedNotificationAction = notice => ({
	type: types.RECEIVED_NOTIFICATION, notice
});

export const getAllMediaAction = () => ({
	type: types.GET_ALL_MEDIA
});

export const allMediaLoadedAction = allMedia => ({
	type: types.ALL_MEDIA_LOADED,
	allMedia
});

export const getMediaGenreAction = () => ({
	type: types.GET_MEDIA_GENRE
});

export const mediaGenreLoadedAction = allMedia => ({
	type: types.MEDIA_GENRE_LOADED,
	allMedia
});