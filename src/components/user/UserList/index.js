import UsersList from './UserList';
import { connect } from 'react-redux';

export default connect((state) => ({
  userDataList: state.addressBook.userList,
}))(UsersList);
