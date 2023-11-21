import { lazy, Suspense } from 'react';
import styled from '@emotion/styled';
<<<<<<< HEAD:src/pages/components/TypographyPage.jsx
import Heading from '../../components/hyun-design-system/typography/Heading';
import Text from '../../components/hyun-design-system/typography/Text';
import { defaultTheme } from '../../themes';
=======
import CodeContainer from '../../../components/docs/CodeContainer';
import Heading from '../../../components/hyun-design-system/typography/Heading';
import Text from '../../../components/hyun-design-system/typography/Text';
import { defaultTheme } from '../../../themes';
>>>>>>> 852e182 (클래스명 수정 + nav 페이지 추가):src/pages/components/foundation/HeadingPage.jsx

const LazyCodeContainer = lazy(() => import('../../components/docs/CodeContainer'));

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  padding: 32px;
  border: 2px solid ${defaultTheme.colors.divider};
  border-radius: 5px;
`;

const ComponentContent = styled.div`
  margin-bottom: 50px;
`;

const ComponentPage = () => {
  return (
    <div className="Docs">
      <div className="TypoGraphy">
        <ComponentContent>
          <Heading as="h2" size={2} text="1. 개요" />
          <Text>Heading 컴포넌트를 통해 헤더 요소를 생성합니다.</Text>
          <StyledPreview>
            <Heading as="h1" text="Default Title" />
            <Heading as="h3" text="H3 Title" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.overview} />
          </Suspense>
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size={2} text="2. Tag" />
          <Text>as 프로퍼티를 통해 렌더링 되는 태그를 변경합니다.</Text>
          <StyledPreview>
            <Heading as="h1" text="H1 Title" />
            <Heading as="h2" text="H2 Title" />
            <Heading as="h3" text="H3 Title" />
            <Heading as="h4" text="H4 Title" />
            <Heading as="h5" text="H5 Title" />
            <Heading as="h6" text="H6 Title" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.level} />
          </Suspense>
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size={2} text="3. Color" />
          <Text>
            color 프로퍼티를 통해 헤더 컬러를 지정하며, 기본 값은 &#39;#111111&#39; 입니다 다른 컬러를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 color 프로퍼티를 통해 컬러를 적용한 예시입니다.
          </Text>
          <StyledPreview>
            <Heading as="h2" size={2} text="Default Color" />
            <Heading as="h2" size={2} color="secondaryText" text="Secondary Color" />
            <Heading as="h2" size={2} color="tertiaryText" text="Tertiary Color" />
            <Heading as="h2" size={2} color="blue500" text="Blue Color" />
            <Heading as="h2" size={2} color="green600" text="Green Color" />
            <Heading as="h2" size={2} color="red600" text="Red Color" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.color} />
          </Suspense>
        </ComponentContent>

        <ComponentContent>
          <Heading as="h2" size={2} text="4. Size" />
          <Text>
            size 프로퍼티를 통해 헤더 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
            <br />
            아래는 h1 태그로 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
          </Text>
          <StyledPreview>
            <Heading as="h1" size={1} text="H1 Size" />
            <Heading as="h2" size={2} text="H2 Size" />
            <Heading as="h3" size={3} text="H3 Size" />
            <Heading as="h4" size={4} text="H4 Size" />
            <Heading as="h5" size={5} text="H5 Size" />
            <Heading as="h6" size={6} text="H6 Size" />
          </StyledPreview>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={HeadingCode.size} />
          </Suspense>
        </ComponentContent>
      </div>
    </div>
  );
};

const HeadingCode = {
  overview: [`<!-- Default Heading -->`, `<Heading as="h1" text="Default Title" />`, ``, `<!-- H3 Heading -->`, `<Heading as="h3" text="H3 Title" />`].join('\n'),
  level: [
    `<!-- H1 Heading -->`,
    `<Heading as="h1" text="H1 Title" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading as="h2" text="H2 Title" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading as="h3" text="H3 Title" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading as="h4" text="H4 Title" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading as="h5" text="H5 Title" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading as="h6" text="H6 Title" />`,
  ].join('\n'),
  color: [
    `<!-- Heading Default Color -->`,
    `<Heading as="h2" size={2} text="Default Color" />`,
    ``,
    `<!-- Heading Secondary Color -->`,
    `<Heading as="h2" size={2} color="secondaryText" text="Secondary Color" />`,
    ``,
    `<!-- Heading Tertiary Color -->`,
    `<Heading as="h2" size={2} color="tertiaryText" text="Tertiary Color" />`,
    ``,
    `<!-- Heading Blue Color -->`,
    `<Heading as="h2" size={2} color="blue500" text="Blue Color" />`,
    ``,
    `<!-- Heading Green Color -->`,
    `<Heading as="h2" size={2} color="green600" text="Green Color" />`,
    ``,
    `<!-- Heading Red Color -->`,
    `<Heading as="h2" size={2} color="red600" text="Red Color" />`,
  ].join('\n'),
  size: [
    `<!-- H1 Heading -->`,
    `<Heading as="h1" size={1} text="H1 Size" />`,
    ``,
    `<!-- H2 Heading -->`,
    `<Heading as="h1" size={2} text="H2 Size" />`,
    ``,
    `<!-- H3 Heading -->`,
    `<Heading as="h1" size={3} text="H3 Size" />`,
    ``,
    `<!-- H4 Heading -->`,
    `<Heading as="h1" size={4} text="H4 Size" />`,
    ``,
    `<!-- H5 Heading -->`,
    `<Heading as="h1" size={5} text="H5 Size" />`,
    ``,
    `<!-- H6 Heading -->`,
    `<Heading as="h1" size={6} text="H6 Size" />`,
  ].join('\n'),
};

export default ComponentPage;
