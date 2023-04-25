import { Text } from '_shared/designSystem/components';
import PropTypes from 'prop-types';

export default function ExampleComponent(props) {
  const { text } = props;
  return <Text>{text}</Text>;
}

ExampleComponent.propTypes = {
  text: PropTypes.string
};
