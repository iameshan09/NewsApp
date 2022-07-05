import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import DetailView from './DetailView';

export default compose(
  connect(state => ({
    itemObject: state.home.itemObject,
  })),
  lifecycle({
    componentDidMount() {
      console.log('Detail Screen');
    },
  }),
)(DetailView);
