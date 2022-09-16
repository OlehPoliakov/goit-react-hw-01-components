
import { Box } from '../box/box';
import { Container } from './App.styled';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import Friends from '../FriendList/FriendList';
import Transaction from '../TransactionHistory/TransactionHistory';
import friends from '../../data/friends.json';
import user from '../../data/user.json';
import statistics from '../../data/statistics.json';
import transactions from '../../data/transactions.json';








export default function App() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gridGap={3}
        pt={2}
      >
        <Box>
          <Profile items={user} />
        </Box>

        <Box>
          <Friends friends={friends} />
        </Box>

        <Box display="flex" height="150px" bg="#e6f6e6">
          <Statistics title="Upload stats" stats={statistics} />
        </Box>

        <Box>
          <Transaction items={transactions} />
        </Box>
      </Box>
    </Container>
  );
}

