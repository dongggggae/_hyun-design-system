import colors from '../../themes/default/tokens/colors';
import styled from '@emotion/styled';

const ColorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

const StyledColorDiv = styled.p`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => colors[props.color]};
`;

const Colors = () => {
  const colorKeys = Object.keys(colors);

  return (
    <ColorContainer>
      {colorKeys.map((color, index) => (
        <StyledColorDiv key={index} color={color}>
          {color}
        </StyledColorDiv>
      ))}
      수정 수정 수정
    </ColorContainer>
  );
};

export default Colors;
