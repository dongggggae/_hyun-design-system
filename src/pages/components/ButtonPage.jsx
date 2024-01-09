import { lazy, Suspense } from 'react';

import Btn from '@/components/hyun-design-system/button/Button';
import BtnGroup from '@/components/hyun-design-system/button/Group';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const ButtonPage = () => {
  return (
    <div className="docs">
      <div className="docs-button">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Btn 컴포넌트를 통해 버튼 요소를 생성합니다.</Text>
          <div className="preview">
            <Btn text="SolidGreen Button" />
            <Btn type="solid-red" text="SolidRed Button" />
            <Btn type="outline-green" text="OutLinGreen Button" />
            <Btn type="outline-gray" text="OutLinGray Button" />
            <Btn type="link" text="Link Button" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. Style" />
          <Text>버튼 스타일은 type 프로퍼티를 통해 변경합니다. 기본 값은 &#39;solid-green&#39; 입니다.</Text>
          <div className="preview">
            <Btn text="SolidGreen Button" />
            <Btn type="solid-red" text="SolidRed Button" />
            <Btn type="outline-green" text="OutLinGreen Button" />
            <Btn type="outline-gray" text="OutLinGray Button" />
            <Btn type="link" text="Link Button" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.type} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="3. Size" />
          <Text>
            size 프로퍼티를 통해 요소의 역할을 결정합니다. 기본값은 &#39;md&#39; 입니다.
            <br />
            size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; &#39;xs&#39; 가 있습니다.
          </Text>
          <div className="preview">
            <Btn text="SolidGreen Button" size="lg" />
            <Btn text="SolidGreen Button" />
            <Btn text="SolidGreen Button" size="sm" />
            <Btn text="SolidGreen Button" size="xs" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.size} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="4. Icon" />
          <Text>
            버튼 아이콘은 Icon 컴포넌트를 통해 아이콘을 생성합니다.
            <br />
            reverse 프로퍼티를 통해 Icon 과 Text의 위치를 변경할 수 있습니다. 기본값은 &#39;false&#39;입니다.
          </Text>
          <div className="preview">
            <Btn iconOnly icon="plus" />
            <Btn type="solid-green" text="Button Text" icon="plus" />
            <Btn type="solid-green" text="Button Text" reverse icon="plus" />
            <Btn type="solid-red" iconOnly icon="plus" />
            <Btn type="solid-red" text="Button Text" icon="plus" />
            <Btn type="solid-red" text="Button Text" reverse icon="plus" onClick={() => alert('Click Event')} />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.icon} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="5. Events" />
          <Text>onClick 프로퍼티를 통해 클릭 이벤트를 발생시킵니다.</Text>
          <div className="preview">
            <Btn text="Click Button" onClick={() => alert('Click Event')} />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.event} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="6. BtnGroup" />
          <Text>BtnGroup 컴포넌트를 통해 버튼을 그룹화합니다.</Text>
          <div className="preview">
            <BtnGroup>
              <Btn type="solid-green" text="Button" />
              <Btn type="outline-green" text="Button" />
            </BtnGroup>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={ButtonCode.group} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const ButtonCode = {
  overview: [
    `<!-- SolidGreen Button> -->`,
    `<Btn text="SolidGreen Button" />`,
    ``,
    `<!-- SolidRed Button> -->`,
    `<Btn type="solid-red" text="SolidRed Button" />`,
    ``,
    `<!-- OutlineGreen Button> -->`,
    `<Btn type="outline-green" text="OutlineGreen Button" />`,
    ``,
    `<!-- OutlineGray Button> -->`,
    `<Btn type="outline-gray" text="OutlineGray Button" />`,
    ``,
    `<!-- Link Button> -->`,
    `<Btn type="link" text="Link Button" />`,
  ].join(`\n`),
  type: [
    `<!-- SolidGreen Button> -->`,
    `<Btn text="SolidGreen Button" />`,
    ``,
    `<!-- SolidRed Button> -->`,
    `<Btn type="solidRed" text="SolidRed Button" />`,
    ``,
    `<!-- OutlineGreen Button> -->`,
    `<Btn type="outlineGreen" text="OutlineGreen Button" />`,
    ``,
    `<!-- OutlineGray Button> -->`,
    `<Btn type="outlineGray" text="OutlineGray Button" />`,
  ].join(`\n`),
  size: [
    `<!-- Large Button> -->`,
    `<Btn size="lg" text="Large Button" />`,
    ``,
    `<!-- Medium Button> -->`,
    `<Btn text="Medium Button" />`,
    ``,
    `<!-- Small Button> -->`,
    `<Btn size="sm" text="Small Button" />`,
    ``,
    `<!-- XSmall Button> -->`,
    `<Btn size="xs" text="XSmall Button" />`,
  ].join(`\n`),
  icon: [
    `<!-- Only Icon Button> -->`,
    `<Btn iconOnly icon="plus" />`,
    ``,
    `<!-- Left Icon Button> -->`,
    `<Btn text="ButtonText" icon="plus" />`,
    ``,
    `<!-- Right Icon Button> -->`,
    `<Btn type="solid-red" text="ButtonText" reverse icon="plus" />`,
  ].join(`\n`),
  event: [`<!-- Button Events> -->`, `<Btn text="Click Button" onClick={() => alert('Click Event')} />`].join(`\n`),
  group: [
    `<BtnGroup>`,
    ` <Btn type="solid-green" text="Button" />`,
    ` <Btn type="outline-green" text="Button" />`,
    `</BtnGroup>`,
  ].join(`\n`),
};

export default ButtonPage;
