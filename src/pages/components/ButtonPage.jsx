import { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
import Heading from '../../components/hyun-design-system/typography/Heading';
import Text from '../../components/hyun-design-system/typography/Text';
import Button from '../../components/hyun-design-system/button/Button';
import Icon from '../../components/hyun-design-system/icon/Icon';
import { defaultTheme } from '../../themes';

const LazyCodeContainer = lazy(() => import('../../components/docs/CodeContainer'));

const StyledPreview = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  padding: 32px;
  border: 2px solid ${defaultTheme.colors.divider};
  border-radius: 5px;
`;

const ComponentContent = styled.div`
  margin-bottom: 50px;
`;

const ComponentPage = () => {
  return (
    <div className="docs">
      <div className="page__button">
        <ComponentContent>
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Button 컴포넌트를 통해 버튼 요소를 생성합니다.</Text>
          <StyledPreview>
            <Button type="solidGreen" text="SolidGreen Button"></Button>
            <Button type="solidRed" text="SolidRed Button"></Button>
            <Button type="outlineGreen" text="OutlineGreen Button"></Button>
            <Button type="outlineGray" text="OutlineGray Button"></Button>
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.overview} />
          </Suspense>
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size="2" text="2. Style" />
          <Text>버튼 스타일은 type 프로퍼티를 통해 변경합니다. 기본 값은 &#39;solidGreen&#39; 입니다.</Text>
          <StyledPreview>
            <Button type="solidGreen" text="SolidGreen Button"></Button>
            <Button type="solidRed" text="SolidRed Button"></Button>
            <Button type="outlineGreen" text="OutlineGreen Button"></Button>
            <Button type="outlineGray" text="OutlineGray Button"></Button>
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.type} />
          </Suspense>
        </ComponentContent>
        <ComponentContent>
          <Heading as="h2" size="2" text="3. Size" />
          <Text>
            size 프로퍼티를 통해 요소의 역할을 결정합니다. 기본값은 &#39;md&#39; 입니다.
            <br />
            size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; &#39;xs&#39; 가 있습니다.
          </Text>
          <StyledPreview>
            <Button size="lg" text="Large Button" />
            <Button text="Medium Button" />
            <Button size="sm" text="Small Button" />
            <Button size="xs" text="XSmall Button" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.size} />
          </Suspense>
        </ComponentContent>
        <ComponentContent>
          <Heading as="h2" size="2" text="4. Icon" />
          <Text>
            버튼 아이콘은 Icon 컴포넌트를 통해 아이콘을 생성합니다.
            <br />
            reverse 프로퍼티를 통해 Icon 과 Text의 위치를 변경할 수 있습니다. 기본값은 &#39;false&#39;입니다.
          </Text>
          <StyledPreview>
            <Button>
              <Icon name="plus" color="white" />
            </Button>
            <Button text="Left Icon Button">
              <Icon name="plus" color="white" />
            </Button>
            <Button text="Right Icon Button" reverse>
              <Icon name="plus" color="white" />
            </Button>
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.icon} />
          </Suspense>
        </ComponentContent>
        <ComponentContent>
          <Heading as="h2" size="2" text="5. Events" />
          <Text>onClick 프로퍼티를 통해 클릭 이벤트를 발생시킵니다.</Text>
          <StyledPreview>
            <Button text="Click Button" onClick={() => alert('Click Event')} />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.event} />
          </Suspense>
        </ComponentContent>
      </div>
    </div>
  );
};

const ButtonCode = {
  overview: [
    `<!-- SolidGreen Button> -->`,
    `<Button text="SolidGreen Button" />`,
    ``,
    `<!-- SolidRed Button> -->`,
    `<Button type="solidRed" text="SolidRed Button" />`,
    ``,
    `<!-- OutlineGreen Button> -->`,
    `<Button type="outlineGreen" text="OutlineGreen Button" />`,
    ``,
    `<!-- OutlineGray Button> -->`,
    `<Button type="outlineGray" text="OutlineGray Button" />`,
  ].join(`\n`),
  type: [
    `<!-- SolidGreen Button> -->`,
    `<Button text="SolidGreen Button" />`,
    ``,
    `<!-- SolidRed Button> -->`,
    `<Button type="solidRed" text="SolidRed Button" />`,
    ``,
    `<!-- OutlineGreen Button> -->`,
    `<Button type="outlineGreen" text="OutlineGreen Button" />`,
    ``,
    `<!-- OutlineGray Button> -->`,
    `<Button type="outlineGray" text="OutlineGray Button" />`,
  ].join(`\n`),
  size: [
    `<!-- Large Button> -->`,
    `<Button size="lg" text="Large Button" />`,
    ``,
    `<!-- Medium Button> -->`,
    `<Button text="Medium Button" />`,
    ``,
    `<!-- Small Button> -->`,
    `<Button size="sm" text="Small Button" />`,
    ``,
    `<!-- XSmall Button> -->`,
    `<Button size="xs" text="XSmall Button" />`,
  ].join(`\n`),
  icon: [
    `<!-- Only Icon Button> -->`,
    `<Button>`,
    `<Icon name="plus" color="white" />`,
    `</Button>`,
    ``,
    `<!-- Left Icon Button> -->`,
    `<Button text="Left Icon Button">`,
    `<Icon name="plus" color="white" />`,
    `</Button>`,
    ``,
    `<!-- Right Icon Button> -->`,
    `<Button text="Right Icon Button" reverse>`,
    `<Icon name="plus" color="white" />`,
    `</Button>`,
  ].join(`\n`),
  event: [`<Button text="Click Button" onClick={() => alert('Click Event')} />`].join(`\n`),
};

export default ComponentPage;
