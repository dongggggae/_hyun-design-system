import styled from '@emotion/styled';
import CodeContainer from '../../components/docs/CodeContainer';
import Heading from '../../components/hyun-design-system/typography/Heading';

const StyledPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-wrap: wrap;
  padding: 32px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  color: #333;
`;

const Desc = styled.p`
  margin-bottom: 16px;
  color: #eee;
  font-sizze: 14px;
  line-height: 24px;
`;

const ComponentContent = styled.div`
  margin-bottom: 50px;
`;

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

const TypoGraphy = () => {
  return (
    <div className="TypoGraphy">
      <ComponentContent>
        <Heading as="h2" size={2} text="1. 개요" />
        <Desc>Heading 컴포넌트를 통해 헤더 요소를 생성합니다.</Desc>
        <StyledPreview>
          <Heading as="h1" text="Default Title" />
          <Heading as="h3" text="H3 Title" />
        </StyledPreview>
        <CodeContainer codeString={HeadingCode.overview} />
      </ComponentContent>

      <ComponentContent>
        <Heading as="h2" size={2} text="2. Tag" />
        <Desc>as 프로퍼티를 통해 렌더링 되는 태그를 변경합니다.</Desc>
        <StyledPreview>
          <Heading as="h1" text="H1 Title" />
          <Heading as="h2" text="H2 Title" />
          <Heading as="h3" text="H3 Title" />
          <Heading as="h4" text="H4 Title" />
          <Heading as="h5" text="H5 Title" />
          <Heading as="h6" text="H6 Title" />
        </StyledPreview>
        <CodeContainer codeString={HeadingCode.level} />
      </ComponentContent>

      <ComponentContent>
        <Heading as="h2" size={2} text="3. Size" />
        <Desc>
          Size 프로퍼티를 통해 헤더 사이즈를 지정하며, 해당 태그에 다른 크기를 적용하고 싶은 경우에 사용합니다.
          <br />
          아래는 h1 태그로 Size 프로퍼티를 통해 사이즈를 적용한 예시입니다.
        </Desc>
        <StyledPreview>
          <Heading as="h1" size={1} text="H1 Size" />
          <Heading as="h2" size={2} text="H2 Size" />
          <Heading as="h3" size={3} text="H3 Size" />
          <Heading as="h4" size={4} text="H4 Size" />
          <Heading as="h5" size={5} text="H5 Size" />
          <Heading as="h6" size={6} text="H6 Size" />
        </StyledPreview>
        <CodeContainer codeString={HeadingCode.size} />
      </ComponentContent>
    </div>
  );
};
export default TypoGraphy;
