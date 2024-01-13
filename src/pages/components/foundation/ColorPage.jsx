import styled from '@emotion/styled';

import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';
import colors from '@/themes/default/tokens/colors';

const ColorWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColorUnit = styled.div`
  position: relative;
  flex: 1;
  min-width: 120px;
  height: 90px;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${(props) => colors[props.color]};
`;

const ColorPage = () => {
  const colorKeys = Object.keys(colors);

  return (
    <div className="docs">
      <div className="docs-color">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. Gray" />
          <Text>다음은 Gray Scale을 나타냅니다.</Text>
          <ColorWrap>
            {colorKeys.slice(0, 17).map((color, index) => (
              <ColorUnit key={index}>
                <ColorBox color={color}></ColorBox>
                <Text>{color}</Text>
              </ColorUnit>
            ))}
          </ColorWrap>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Red & Ember" />
          <Text>다음은 Red & Ember Scale을 나타냅니다.</Text>
          <ColorWrap>
            {colorKeys.slice(17, 25).map((color, index) => (
              <ColorUnit key={index}>
                <ColorBox color={color}></ColorBox>
                <Text>{color}</Text>
              </ColorUnit>
            ))}
          </ColorWrap>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Green & Blue & Navy" />
          <Text>다음은 Green & Blue & Navy Scale을 나타냅니다.</Text>
          <ColorWrap>
            {colorKeys.slice(25, 39).map((color, index) => (
              <ColorUnit key={index}>
                <ColorBox color={color}></ColorBox>
                <Text>{color}</Text>
              </ColorUnit>
            ))}
          </ColorWrap>
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
