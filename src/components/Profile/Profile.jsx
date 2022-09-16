import PropTypes from 'prop-types';
import defaultImage from './defaultImage.png';
import {
  ProfileList,
  User,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled.jsx';

export default function Profile({ items }) {
  return (
    <ProfileList>
      {items.map(
        ({
          id,
          username = 'User Name',
          tag,
          location,
          avatar,
          stats: { followers, views, likes },
        }) => (
          <User key={id}>
            <Description>
              <Avatar
                src={avatar && defaultImage}
                alt="User avatar"
                width={100}
                height={100}
              />
              <Name>{username}</Name>
              <Tag>@{tag}</Tag>
              <Location>{location}</Location>
            </Description>

            <Stats>
              <Item>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
              </Item>
              <Item>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
              </Item>
              <Item>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
              </Item>
            </Stats>
          </User>
        )
      )}
    </ProfileList>
  );
}

//   username = 'User Name', tag, location, avatar, stats= { followers, views, likes }

// export default function Profile({
//   username = 'User Name',
//   tag,
//   location,
//   avatar = defaultImage,
//   stats: { followers, views, likes },
// }) {
//   return (
//     <ProfileList>
//       <Description>
//         <Avatar
//           src={avatar && defaultImage}
//           alt="User avatar"
//           width={100}
//           height={100}
//         />
//         <Name>{username}</Name>
//         <Tag>@{tag}</Tag>
//         <Location>{location}</Location>
//       </Description>

//       <Stats>
//         <Item>
//           <Label>Followers</Label>
//           <Quantity>{followers}</Quantity>
//         </Item>
//         <Item>
//           <Label>Views</Label>
//           <Quantity>{views}</Quantity>
//         </Item>
//         <Item>
//           <Label>Likes</Label>
//           <Quantity>{likes}</Quantity>
//         </Item>
//       </Stats>
//     </ProfileList>
//   );
// }

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
