import PropTypes from 'prop-types';

import {
  TransactionHistory,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from './TransactionHistory.styled.jsx';


export default function Transaction({ items }) {
  return (
    <TransactionHistory>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </TransactionHistory>
  );
}

Transaction.prototype = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};