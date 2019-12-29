import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function getCurrentRoute(nav){
    if(Array.isArray(nav.routes)&&nav.routes.length>0){
        return getCurrentRoute(nav.routes[nav.index])
    }else {
        return nav.routeName
    }
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute
};