import { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
import Heading from '../../components/hyun-design-system/typography/Heading';
import Text from '../../components/hyun-design-system/typography/Text';
import Badge from '../../components/hyun-design-system/badge/Badge';
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
      <div className="page__badge">
        <ComponentContent>
          <Heading as="h2" size={2} text="1. 개요" />
          <Text>Badge 컴포넌트를 통해 뱃지 요소를 생성합니다.</Text>
          <StyledPreview>
            <Badge text="Default Badge" />
            <Badge text="Success Badge" state="success" />
            <Badge text="Warn Badge" state="warn" />
            <Badge text="Error Badge" state="error" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={BadgeCode.overview} />
          </Suspense>
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size={2} text="2. 스타일" />
          <Text>뱃지 스타일은 State 프로퍼티를 통해 변경합니다. 기본 값은 &#39;information&#39; 입니다.</Text>
          <StyledPreview>
            <Badge text="Default Badge" />
            <Badge text="Success Badge" state="success" />
            <Badge text="Warn Badge" state="warn" />
            <Badge text="Error Badge" state="error" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={BadgeCode.state} />
          </Suspense>
        </ComponentContent>
      </div>
    </div>
  );
};

const BadgeCode = {
  overview: [
    `<!-- Default Badge> -->`,
    `<Badge text="Default Badge" />`,
    ``,
    `<!-- Success Badge> -->`,
    `<Badge text="Success Badge" state="success" />`,
    ``,
    `<!-- Warn Badge> -->`,
    `<Badge text="Warn Badge" state="warn" />`,
    ``,
    `<!-- Error Badge> -->`,
    `<Badge text="Error Badge" state="error" />`,
  ].join(`\n`),
  state: [
    `<!-- Default Badge> -->`,
    `<Badge text="Default Badge" />`,
    ``,
    `<!-- Success Badge> -->`,
    `<Badge text="Success Badge" state="success" />`,
    ``,
    `<!-- Warn Badge> -->`,
    `<Badge text="Warn Badge" state="warn" />`,
    ``,
    `<!-- Error Badge> -->`,
    `<Badge text="Error Badge" state="error" />`,
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
    `<Button text="Right Icon Button" reverse={true}>`,
    `<Icon name="plus" color="white" />`,
    `</Button>`,
  ].join(`\n`),
  event: [`<Button text="Click Button" onClick={() => alert('Click Event')} />`].join(`\n`),
};

export default ComponentPage;
