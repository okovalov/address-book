import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UsersDetailsPage from './UserDetailsPage';

import { loadUserById } from '../../store/actions/addressBookActions';

export default connect(
  (state) => ({
    isLoading: state.addressBook.isLoading,
  }),
  (dispatch) => ({
    ...bindActionCreators({ loadUserById }, dispatch),
  }),
)(UsersDetailsPage);
