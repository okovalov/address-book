import { connect } from 'react-redux';
import UserDetails from './UserDetails';

export default connect((state) => ({
  userDetails: state.addressBook.selectedUserDetails,
}))(UserDetails);
