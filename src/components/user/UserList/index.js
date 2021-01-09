import { connect } from 'react-redux';
import UsersList from './UserList';

export default connect((state) => ({
  userDataList: state.addressBook.userList,
}))(UsersList);
