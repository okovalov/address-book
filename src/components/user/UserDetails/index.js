import UserDetails from './UserDetails';
import { connect } from 'react-redux';

export default connect((state) => ({
  userDetails: state.addressBook.selectedUserDetails,
}))(UserDetails);
