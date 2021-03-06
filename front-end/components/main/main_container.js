import { connect } from 'react-redux';
import {unauthUser, requestPair, fetchPlant, getTodos, resetTodos} from '../../actions';
import Main from './main';
import MainNavigator from './main_navigator';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.auth.user_id,
    connectionId: state.auth.connectionId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    unauthUser: () => dispatch(unauthUser),
    requestPair: (userId) => dispatch(requestPair(userId)),
    getTodos: (connectionId) => dispatch(getTodos(connectionId)),
    fetchPlant: (connectionId) => dispatch(fetchPlant(connectionId)),
    resetTodos: () => dispatch(resetTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
