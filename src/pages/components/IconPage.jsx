import { lazy, Suspense } from 'react';

import Icon from '@/components/hyun-design-system/icon/Icon';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const iconMap = ['menu', 'arrow-up', 'arrow-right', 'arrow-down', 'arrow-left', 'close', 'visible', 'invisible'];

const IconPage = () => {
  return (
    <div className="docs">
      <div className="docs-icon">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. 개요" />
          <Text>Icon 컴포넌트를 통해 아이콘 요소를 생성합니다.</Text>
          <div className="preview">
            <Icon name="arrow-up" size="lg" />
            <Icon name="arrow-right" size="lg" />
            <Icon name="arrow-down" size="lg" />
            <Icon name="arrow-left" size="lg" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={IconCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Color" />
          <Text>
            color 프로퍼티를 통해 아이콘 컬러를 지정하며, 기본 값은 &#39;#000000&#39; 입니다 다른 컬러를 적용하고 싶은
            경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Icon name="close" size="lg" />
            <Icon name="close" size="lg" color="green" />
            <Icon name="close" size="lg" color="blue" />
            <Icon name="close" size="lg" color="amber" />
            <Icon name="close" size="lg" color="red" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={IconCode.color} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Size" />
          <Text>
            size 프로퍼티를 통해 아이콘의 사이즈를 지정하며, 기본값은 &#39;md&#39; 입니다.
            <br />
            size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Icon name="close" size="lg" />
            <Icon name="close" />
            <Icon name="close" size="sm" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={IconCode.size} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="4. 아이콘 종류" />
          <Text>아이콘은 다음과 같은 종류를 가집니다.</Text>
          <div className="preview">
            {iconMap.map((name, idx) => (
              <div className="icon-preview" key={`${name}_${idx}`}>
                <Icon name={name} />
                <Text>{name}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const IconCode = {
  overview: [
    `<!-- Arrow Up > -->`,
    `<Icon name="arrow-up" size="lg" />`,
    ``,
    `<!-- Arrow Right > -->`,
    `<Icon name="arrow-right" size="lg" />`,
    ``,
    `<!-- Arrow Down > -->`,
    `<Icon name="arrow-down" size="lg" />`,
    ``,
    `<!-- Arrow Left > -->`,
    `<Icon name="arrow-left" size="lg" />`,
  ].join(`\n`),
  color: [
    `<!-- Default Color Button> -->`,
    `<Icon name="close" size="lg" />`,
    ``,
    `<!-- Green Color Button> -->`,
    `<Icon name="close" size="lg" color="green" />`,
    ``,
    `<!-- Blue Color Button> -->`,
    `<Icon name="close" size="lg" color="blue" />`,
    ``,
    `<!-- Amber Color Button> -->`,
    `<Icon name="close" size="lg" color="amber" />`,
    ``,
    `<!-- Red Color Button> -->`,
    `<Icon name="close" size="lg" color="red" />`,
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

export default IconPage;
