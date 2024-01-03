import { lazy, Suspense } from 'react';

import Icon from '@/components/hyun-design-system/icon/Icon';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';
import { useTheme } from '@/theme/ThemeContext';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const ComponentPage = () => {
  const theme = useTheme();
  const iconMap = theme.components.icon.iconTypes;

  return (
    <div className="docs">
      <div className="docs-icon">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Icon 컴포넌트를 통해 아이콘 요소를 생성합니다.</Text>
          <div className="preview">
            <Icon name="arrowLeft" size="lg" />
            <Icon name="arrowUp" size="lg" />
            <Icon name="arrowRight" size="lg" />
            <Icon name="arrowDown" size="lg" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={IconCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. Color" />
          <Text>
            color 프로퍼티를 통해 아이콘 컬러를 지정하며, 기본 값은 &#39;#000000&#39; 입니다 다른 컬러를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Icon name="close" size="lg" />
            <Icon name="close" size="lg" color="green600" />
            <Icon name="close" size="lg" color="amber600" />
            <Icon name="close" size="lg" color="red600" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={IconCode.color} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="3. Size" />
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
          <Heading as="h2" size="2" text="4. 아이콘 종류" />
          <Text>아이콘은 다음과 같은 종류를 가집니다.</Text>
          <div className="preview">
            {Object.keys(iconMap).map((name, idx) => (
              <div className="icon-preview" key={idx}>
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
