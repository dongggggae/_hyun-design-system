import styled from '@emotion/styled';
import Heading from '../../components/hyun-design-system/typography/Heading';
import CodeContainer from '../../components/docs/CodeContainer';
import Button from '../../components/hyun-design-system/button/Button';

const StyledPreview = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 32px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  color: #333;
`;

const ComponentContent = styled.div`
  margin-bottom: 50px;
`;

const Desc = styled.p`
  margin-bottom: 16px;
  color: #eee;
  font-sizze: 14px;
  line-height: 24px;
`;

const ButtonCode = {
  overview: [
    `<!-- Primary Button> -->`,
    `<Button text="Primary Button" />`,
    ``,
    `<!-- Secondary Button> -->`,
    `<Button variant="secondary" text="Secondary Button" />`,
    ``,
    `<!-- Tertiary Button> -->`,
    `<Button variant="tertiary" text="Tertiary Button" />`,
  ].join(`\n`),
  variant: [
    `<!-- Primary Button> -->`,
    `<Button text="Primary Button" />`,
    ``,
    `<!-- Secondary Button> -->`,
    `<Button variant="secondary" text="Secondary Button" />`,
    ``,
    `<!-- Tertiary Button> -->`,
    `<Button variant="tertiary" text="Tertiary Button" />`,
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
};

const Btn = () => {
  return (
    <div className="Btn">
      <ComponentContent>
        <Heading as="h2" size={2} text="1. 개요" />
        <Desc>Button 컴포넌트를 통해 버튼 요소를 생성합니다.</Desc>
        <StyledPreview>
          <Button variant="primary" text="Primary Button"></Button>
          <Button variant="secondary" text="Secondary Button"></Button>
          <Button variant="tertiary" text="Tertiary Button"></Button>
        </StyledPreview>
        <CodeContainer codeString={ButtonCode.overview} />
      </ComponentContent>

      <ComponentContent>
        <Heading as="h2" size={2} text="2. 스타일" />
        <Desc>버튼 스타일은 variant 프로퍼티를 통해 변경합니다. 기본 값은 primary 입니다.</Desc>
        <StyledPreview>
          <Button text="Primary Button" />
          <Button variant="secondary" text="Secondary Button" />
          <Button variant="tertiary" text="Tertiary Button" />
        </StyledPreview>
        <CodeContainer codeString={ButtonCode.variant} />
      </ComponentContent>

      <ComponentContent>
        <Heading as="h2" size={2} text="3. 사이즈" />
        <Desc>
          버튼 사이즈는 size 프로퍼티를 통해 요소의 역할을 결정합니다. 기본값은 &#39;md&#39;입니다.
          <br />
          size 프로퍼티 속성은 &#39;lg&#39;, &#39;md&#39;, &#39;sm&#39; &#39;xs&#39;가 있습니다.
        </Desc>
        <StyledPreview>
          <Button size="lg" text="Large Button" />
          <Button text="Medium Button" />
          <Button size="sm" text="Small Button" />
          <Button size="xs" text="XSmall Button" />
        </StyledPreview>
        <CodeContainer codeString={ButtonCode.size} />
      </ComponentContent>
    </div>
  );
};
export default Btn;
