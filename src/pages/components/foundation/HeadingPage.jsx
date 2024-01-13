import { lazy, Suspense } from 'react';

import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const HeadingPage = () => {
  return (
    <div className="docs">
      <div className="docs-heading">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. 개요" />
          <Text>Heading 컴포넌트를 통해 헤더 요소를 생성합니다.</Text>
          <div className="preview">
            <Heading tag="h1" text="Default Title" />
            <Heading tag="h3" text="H3 Title" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Tag" />
          <Text>Tag 프로퍼티를 통해 렌더링 되는 태그를 변경합니다.</Text>
          <div className="preview">
            <Heading tag="h1" text="H1 Title" />
            <Heading tag="h2" text="H2 Title" />
            <Heading tag="h3" text="H3 Title" />
            <Heading tag="h4" text="H4 Title" />
            <Heading tag="h5" text="H5 Title" />
            <Heading tag="h6" text="H6 Title" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.level} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Color" />
          <Text>
            color 프로퍼티를 통해 헤더 컬러를 지정하며, 기본 값은 &#39;#111111&#39; 입니다 다른 컬러를 적용하고 싶은
            경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Heading tag="h2" size="2" text="Default Color" />
            <Heading tag="h2" size="2" color="secondary" text="Secondary Color" />
            <Heading tag="h2" size="2" color="tertiary" text="Tertiary Color" />
            <Heading tag="h2" size="2" color="information" text="Blue Color" />
            <Heading tag="h2" size="2" color="positive" text="Green Color" />
            <Heading tag="h2" size="2" color="caution" text="Amber Color" />
            <Heading tag="h2" size="2" color="negative" text="Red Color" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.color} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="4. Size" />
          <Text>
            size 프로퍼티를 통해 헤더 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 h1 태그로 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
          </Text>
          <div className="preview">
            <Heading tag="h1" size="1" text="H1 Size" />
            <Heading tag="h2" size="2" text="H2 Size" />
            <Heading tag="h3" size="3" text="H3 Size" />
            <Heading tag="h4" size="4" text="H4 Size" />
            <Heading tag="h5" size="5" text="H5 Size" />
            <Heading tag="h6" size="6" text="H6 Size" />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.size} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const HeadingCode = {
  overview: [
    `<!-- Default Heading -->`,
    `<Heading tag="h1" text="Default Title" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading tag="h3" text="H3 Title" />`,
  ].join('\n'),
  level: [
    `<!-- H1 Heading -->`,
    `<Heading tag="h1" text="H1 Title" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading tag="h2" text="H2 Title" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading tag="h3" text="H3 Title" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading tag="h4" text="H4 Title" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading tag="h5" text="H5 Title" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading tag="h6" text="H6 Title" />`,
  ].join('\n'),
  color: [
    `<!-- Heading Default Color -->`,
    `<Heading tag="h2" size='2' text="Default Color" />`,
    ``,
    `<!-- Heading Secondary Color -->`,
    `<Heading tag="h2" size='2' color="secondary" text="Secondary Color" />`,
    ``,
    `<!-- Heading Tertiary Color -->`,
    `<Heading tag="h2" size='2' color="tertiary" text="Tertiary Color" />`,
    ``,
    `<!-- Heading Blue Color -->`,
    `<Heading tag="h2" size='2' color="information" text="Blue Color" />`,
    ``,
    `<!-- Heading Green Color -->`,
    `<Heading tag="h2" size='2' color="positive" text="Green Color" />`,
    ``,
    `<!-- Heading Amber Color -->`,
    `<Heading tag="h2" size='2' color="caution" text="Amber Color" />`,
    ``,
    `<!-- Heading Red Color -->`,
    `<Heading tag="h2" size='2' color="negative" text="Red Color" />`,
  ].join('\n'),
  size: [
    `<!-- H1 Heading -->`,
    `<Heading tag="h1" size='1' text="H1 Size" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading tag="h1" size='2' text="H2 Size" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading tag="h1" size='3' text="H3 Size" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading tag="h1" size='4' text="H4 Size" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading tag="h1" size='5' text="H5 Size" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading tag="h1" size='6' text="H6 Size" />`,
  ].join('\n'),
};

export default HeadingPage;
