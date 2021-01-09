import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersListPage from './UsersListPage';

import { loadUserList } from '../../store/actions/addressBookActions';

export default connect(
  (state) => ({
    isListLoaded: state.addressBook.isListLoaded,
    isLoading: state.addressBook.isLoading,
  }),
  (dispatch) => ({
    ...bindActionCreators({ loadUserList }, dispatch),
  }),
)(UsersListPage);
