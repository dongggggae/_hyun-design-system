import { lazy, Suspense } from 'react';

import Badge from '@/components/hyun-design-system/badge/Badge';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const BadgePage = () => {
  return (
    <div className="docs">
      <div className="docs-badge">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. 개요" />
          <Text>Badge 컴포넌트를 통해 뱃지 요소를 생성합니다.</Text>
          <div className="preview">
            <div>
              <div className="badge__wrap">
                <Heading as="h4" size="6" text="Defult Badge" />
                <Badge text="Default Badge" />
              </div>
              <br />
              <div className="badge__wrap">
                <Heading as="h4" size="6" text="Defult Badge" />
                <Badge text="Outline Badge" outline />
              </div>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={BadgeCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. State" />
          <Text>뱃지 스타일은 State 프로퍼티를 통해 변경합니다. 기본 값은 &#39;information&#39; 입니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" />
            <Badge text="Success Badge" state="success" />
            <Badge text="Warn Badge" state="warn" />
            <Badge text="Error Badge" state="error" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={BadgeCode.state} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Outline" />
          <Text>뱃지 아웃라인 스타일은 Outline 프로퍼티를 통해 변경합니다. 기본 값은 &#39;false&#39; 입니다.</Text>
          <div className="preview">
            <Badge text="Default Badge" outline />
            <Badge text="Success Badge" state="success" outline />
            <Badge text="Warn Badge" state="warn" outline />
            <Badge text="Error Badge" state="error" outline />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={BadgeCode.outline} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const BadgeCode = {
  overview: [
    `<!-- Default Badge -->`,
    `<Badge text="Default Badge" />`,
    ``,
    `<!-- Success Badge -->`,
    `<Badge text="Success Badge" state="success" />`,
    ``,
    `<!-- Warn Badge -->`,
    `<Badge text="Warn Badge" state="warn" />`,
    ``,
    `<!-- Error Badge -->`,
    `<Badge text="Error Badge" state="error" />`,
  ].join(`\n`),
  state: [
    `<!-- Default Badge -->`,
    `<Badge text="Default Badge" />`,
    ``,
    `<!-- Success Badge -->`,
    `<Badge text="Success Badge" state="success" />`,
    ``,
    `<!-- Warn Badge -->`,
    `<Badge text="Warn Badge" state="warn" />`,
    ``,
    `<!-- Error Badge -->`,
    `<Badge text="Error Badge" state="error" />`,
  ].join(`\n`),
  outline: [
    `<!-- Default Outline Badge -->`,
    `<Badge text="Default Badge" outline />`,
    ``,
    `<!-- Success Outline Badge -->`,
    `<Badge text="Success Badge" state="success" outline />`,
    ``,
    `<!-- Warn Outline Badge -->`,
    `<Badge text="Warn Badge" state="warn" outline />`,
    ``,
    `<!-- Error Outline Badge -->`,
    `<Badge text="Error Badge" state="error" outline />`,
  ].join(`\n`),
};

export default BadgePage;
