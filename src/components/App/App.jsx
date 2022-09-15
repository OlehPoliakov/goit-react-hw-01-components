
import ProfileList from '../Profile/ProfileList';
import user from '../../data/user.json';
import { Container } from './App.styled';
import { Button } from "../details/button";
import { Box } from '../box/box';

import { HiBan, HiAdjustments, HiAtSymbol } from 'react-icons/hi';

export default function App() {
  return (
    <Container>
      <Box>
        <ProfileList items={user} />
        {/* <Button icon={<HiBan />}>Search</Button>
        <Button icon={<HiAdjustments />}>qwe</Button>
        <Button icon={<HiAtSymbol />}>asd</Button> */}
      </Box>
    </Container>
  );
}

