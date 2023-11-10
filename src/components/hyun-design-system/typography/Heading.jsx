import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StylesHeading = {
  1: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  2: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  3: {
    fontSize: '40px',
    lineHeight: '56px',
  },
  4: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  5: {
    fontSize: '24px',
    lineHeight: '40px',
  },
  6: {
    fontSize: '20px',
    lineHeight: '32px',
  },
};

const StyledHeading = styled.h1`
  font-size: ${(props) => StylesHeading[props.size].fontSize};
  line-height: ${(props) => StylesHeading[props.size].lineHeight};
`;

const Heading = ({ as, size, text }) => {
  return (
    <StyledHeading as={as} size={size}>
      {text}
    </StyledHeading>
  );
};

StyledHeading.defaultProps = {
  as: 'h1',
  size: 1,
  text: '',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
