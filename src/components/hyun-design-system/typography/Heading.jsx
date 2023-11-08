import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Stylesheading = {
  h1: {
    fontSize: '56px',
    lineHeight: '72px',
  },
  h2: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  h3: {
    fontSize: '40px',
    lineHeight: '56px',
  },
  h4: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  h5: {
    fontSize: '24px',
    lineHeight: '40px',
  },
  h6: {
    fontSize: '20px',
    lineHeight: '32px',
  },
};

const StyledHeading = styled.h1`
  font-size: ${(props) => Stylesheading[props.as].fontSize};
  line-height: ${(props) => Stylesheading[props.as].lineHeight};
`;

const Heading = ({ as, text }) => {
  return <StyledHeading as={as}>{text}</StyledHeading>;
};

StyledHeading.defaultProps = {
  as: 'h4',
  text: null,
};

Heading.propTypes = {
  as: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Heading;
