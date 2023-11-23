import styled from '@emotion/styled';
import CodeContainer from '../../../components/docs/CodeContainer';
import Heading from '../../../components/hyun-design-system/typography/Heading';
import Text from '../../../components/hyun-design-system/typography/Text';
import { defaultTheme } from '../../../themes';

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  padding: 32px;
  border: 2px solid ${defaultTheme.colors.divider};
  border-radius: 5px;

  .text {
    margin-bottom: 0;
  }
`;

const ComponentContent = styled.div`
  margin-bottom: 50px;
`;

const ComponentPage = () => {
  return (
    <div className="docs">
      <div className="page__foundation">
        <ComponentContent>
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Text 컴포넌트를 통해 텍스트 요소를 생성합니다.</Text>
          <StyledPreview>
            <Text>Default Text</Text>
          </StyledPreview>
          <CodeContainer codeString={TextCode.overview} />
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size="2" text="2. Color" />
          <Text>
            color 프로퍼티를 통해 헤더 컬러를 지정하며, 기본 값은 &#39;#555555&#39; 입니다 다른 컬러를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <StyledPreview>
            <Text size="lg" color="primaryText">
              Primary Color
            </Text>
            <Text size="lg">Default Color</Text>
            <Text size="lg" color="tertiaryText">
              Tertiary Color
            </Text>
            <Text size="lg" color="blue500">
              Blue Color
            </Text>
            <Text size="lg" color="green600">
              Green Color
            </Text>
            <Text size="lg" color="red600">
              Red Color
            </Text>
          </StyledPreview>
          <CodeContainer codeString={TextCode.color} />
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size="2" text="3. Size" />
          <Text>
            size 프로퍼티를 통해 헤더 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
          </Text>
          <StyledPreview>
            <Text size="lg">Large Text</Text>
            <Text>Medium Text</Text>
            <Text size="sm">Small Text</Text>
            <Text size="xs">XSmall Text</Text>
            <Text size="xxs">XXSmall Text</Text>
          </StyledPreview>
          <CodeContainer codeString={TextCode.size} />
        </ComponentContent>
      </div>
    </div>
  );
};

const TextCode = {
  overview: [`<!-- Default Text -->`, `<<Text>Default Text</Text>`].join('\n'),
  color: [
    `<!-- Text Primary Color -->`,
    `<Text size="lg" color="primaryText">Primary Color</Text>`,
    ``,
    `<!-- Text Default Color -->`,
    `<Text size="lg">Default Color</Text>`,
    ``,
    `<!-- Text Tertiary Color -->`,
    `<Text size="lg" color="tertiaryText">Tertiary Color</Text>`,
    ``,
    `<!-- Text Blue Color -->`,
    `<Text size="lg" color="blue500">Blue Color</Text>`,
    ``,
    `<!-- Text Green Color -->`,
    `<Text size="lg" color="green600">Green Color</Text>`,
    ``,
    `<!-- Text Red Color -->`,
    `<Text size="lg" color="red600">Red Color</Text>`,
  ].join('\n'),
  size: [
    `<!-- Large Text -->`,
    `<Text size="lg">Large Text</Text>`,
    ``,
    `<!-- Medium Text -->`,
    `<Text>Medium Text</Text>`,
    ``,
    `<!-- Small Text -->`,
    `<Text size="sm">Small Text</Text>`,
    ``,
    `<!-- XSmall Text -->`,
    `<Text size="xs">XSmall Text</Text>`,
    ``,
    `<!-- XXSmall Text -->`,
    `<Text size="xxs">XXSmall Text</Text>`,
  ].join('\n'),
};

export default ComponentPage;
