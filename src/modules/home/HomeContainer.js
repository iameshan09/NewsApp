import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import HomeView from './HomeView';
import {setItemsObjectAction} from './HomeState';

export default compose(
  connect(
    state => ({
      itemObject: state.home.itemObject,
    }),
    dispatch => ({
      setItemsObjectAction: itemObject =>
        dispatch(setItemsObjectAction(itemObject)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Home Screen');
    },
  }),
)(HomeView);
