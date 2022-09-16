import PropTypes from 'prop-types';
import {
  FriendList,
  Item,
  Status,
  Avatar,
  Name,
} from './FriendList.styled.jsx';


export default function Friends({ friends }) {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <Item key={id}>
            <Status type={Status}>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width={50} height={50} />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </FriendList>
  );
}

Friends.prototype = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};