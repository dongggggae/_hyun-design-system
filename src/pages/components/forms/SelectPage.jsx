import styled from '@emotion/styled';

import CodeContainer from '@/components/docs/CodeContainer';
import Icon from '@/components/hyun-design-system/icon/Icon';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';
import { useTheme } from '@/theme/ThemeContext';
import { defaultTheme } from '@/themes';

const StyledPreview = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 32px;
  border: 2px solid ${defaultTheme.colors.divider};
  border-radius: 5px;
`;

const IconPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  column-gap: 15px;
  row-gap: 15px;
  background-color: ${defaultTheme.colors.gray150};
  border-radius: 5px;
`;

const ComponentPage = () => {
  const theme = useTheme();
  const iconMap = theme.components.icon.iconTypes;

  return (
    <div className="docs">
      <div className="docs-select">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Icon 컴포넌트를 통해 아이콘 요소를 생성합니다.</Text>
          <StyledPreview>
            <Icon name="arrowLeft" size="lg" />
            <Icon name="arrowUp" size="lg" />
            <Icon name="arrowRight" size="lg" />
            <Icon name="arrowDown" size="lg" />
          </StyledPreview>
          <CodeContainer codeString={IconCode.overview} />
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. Color" />
          <Text>
            color 프로퍼티를 통해 아이콘 컬러를 지정하며, 기본 값은 &#39;#000000&#39; 입니다 다른 컬러를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <StyledPreview>
            <Icon name="close" size="lg" />
            <Icon name="close" size="lg" color="green600" />
            <Icon name="close" size="lg" color="amber600" />
            <Icon name="close" size="lg" color="red600" />
          </StyledPreview>
          <CodeContainer codeString={IconCode.color} />
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="3. Size" />
          <Text>
            size 프로퍼티를 통해 아이콘의 사이즈를 지정하며, 기본값은 &#39;md&#39; 입니다.
            <br />
            size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; 가 있습니다.
          </Text>
          <StyledPreview>
            <Icon name="close" size="lg" />
            <Icon name="close" />
            <Icon name="close" size="sm" />
          </StyledPreview>
          <CodeContainer codeString={IconCode.size} />
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="4. 아이콘 종류" />
          <Text>아이콘은 다음과 같은 종류를 가집니다.</Text>
          <StyledPreview theme={theme}>
            {Object.keys(iconMap).map((name, idx) => (
              <IconPreview key={idx} className="IconPreview">
                <Icon name={name} />
                <Text>{name}</Text>
              </IconPreview>
            ))}
          </StyledPreview>
        </div>
      </div>
    </div>
  );
};

const IconCode = {
  overview: [
    `<!-- Arrow Left > -->`,
    `<Icon name="arrowLeft" size="lg" />`,
    ``,
    `<!-- Arrow Up > -->`,
    `<Icon name="arrowUp" size="lg" />`,
    ``,
    `<!-- Arrow Right > -->`,
    `<Icon name="arrowRight" size="lg" />`,
    ``,
    `<!-- Arrow Down > -->`,
    `<Icon name="arrowDown" size="lg" />`,
  ].join(`\n`),
  color: [
    `<!-- Default Color Button> -->`,
    `<Icon name="close" size="lg" />`,
    ``,
    `<!-- Green Color Button> -->`,
    `<Icon name="close" size="lg" color="green600" />`,
    ``,
    `<!-- Amber Color Button> -->`,
    `<Icon name="close" size="lg" color="amber600" />`,
    ``,
    `<!-- Red Color Button> -->`,
    `<Icon name="close" size="lg" color="red600" />`,
  ].join(`\n`),
  size: [
    `<!-- Large Size Icon > -->`,
    `<Icon name="close" size="lg" />`,
    ``,
    `<!-- Medium Size Icon > -->`,
    `<Icon name="close" />`,
    ``,
    `<!-- Small Size Icon > -->`,
    `<Icon name="close" size="sm" />`,
  ].join(`\n`),
};

export default ComponentPage;
