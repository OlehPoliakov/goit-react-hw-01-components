import PropTypes from 'prop-types';
import {
  SectionStatistics,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <SectionStatistics>
      <Title >{title}</Title>

      <StatList >
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item
              key={id}
              style={{ backgroundColor: randomHexColor() }}
            >
              <Label >{label}</Label>
              <Percentage >{percentage} %</Percentage>
            </Item>
          );
        })}
      </StatList>
    </SectionStatistics>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};