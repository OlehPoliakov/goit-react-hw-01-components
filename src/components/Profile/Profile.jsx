import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import {
  ProfileList,
  Description,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserItem,
  UserLabel,
  UserQuantity,
} from './Profile.styled.jsx';

export default function Profile({
  username = 'User Name',
  tag,
  location,
  avatar = defaultImage,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileList>
      <Description>
        <UserAvatar
          src={avatar && defaultImage}
          alt="User avatar"
          width={100}
          height={100}
        />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <UserStats>
        <UserItem>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </UserItem>
        <UserItem>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </UserItem>
        <UserItem>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </UserItem>
      </UserStats>
    </ProfileList>
  );
}

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
