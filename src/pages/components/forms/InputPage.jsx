// import { lazy, Suspense } from 'react';

// import Input from '../../../components/hyun-design-system/input/Input';
// import Heading from '../../../components/hyun-design-system/typography/Heading';
// import Text from '../../../components/hyun-design-system/typography/Text';

// const LazyCodeContainer = lazy(() => import('../../../components/docs/CodeContainer'));

const InputPage = () => {
  // return (
  //   <div className="docs">
  //     <div className="docs-input">
  //       <div className="component-content">
  //         <Heading as="h2" size="2" text="1. 개요" />
  //         <Text>Input 컴포넌트를 통해 텍스트&#44; 비밀번호&#44; 검색 등 다양한 유형의 입력 영역을 생성합니다.</Text>
  //         <div className="preview">
  //           <Input placeholder="placeholder" />
  //           <div>
  //             <Heading as="h4" size="6" text="Input Value :" />
  //           </div>
  //         </div>
  //         <Suspense fallback={<div>Loading...</div>}>
  //           <LazyCodeContainer codeString={InputCode.overview} />
  //         </Suspense>
  //       </div>
  //       <div className="component-content">
  //         <Heading as="h2" size="2" text="2. Clear 버튼" />
  //         <Text>clear 프로퍼티를 통해 초기화하는 버튼을 보이게 지정합니다. 기본값은 &#39;false&#39;입니다.</Text>
  //         <div className="preview fill">
  //           <div className="default-input">
  //             <Heading as="h6" size="6" text="Default-Input" />
  //             <hr />
  //             <Input placeholder="placeholder" />
  //           </div>
  //           <div className="clear-input">
  //             <Heading as="h6" size="6" text="Clear-Input" />
  //             <hr />
  //             <Input placeholder="placeholder" clear />
  //           </div>
  //         </div>
  //         <Suspense fallback={<div>Loading...</div>}>
  //           <LazyCodeContainer codeString={InputCode.clear} />
  //         </Suspense>
  //       </div>
  //       <div className="component-content">
  //         <Heading as="h2" size="2" text="3. Field 버튼" />
  //         <Text>Field 프로퍼티를 통해 필드 유형을 지정합니다.</Text>
  //         <div className="preview fill">
  //           <div className="default-input">
  //             <Heading as="h6" size="6" text="Default-Input" />
  //             <hr />
  //             <Input placeholder="placeholder" field="text" />
  //           </div>
  //           <div className="search-input">
  //             <Heading as="h6" size="6" text="Search-Input" />
  //             <hr />
  //             <Input placeholder="placeholder" field="search" />
  //           </div>
  //           <div className="password-input">
  //             <Heading as="h6" size="6" text="Password-Input" />
  //             <hr />
  //             <Input placeholder="placeholder" field="password" />
  //           </div>
  //         </div>
  //         <Suspense fallback={<div>Loading...</div>}>
  //           <LazyCodeContainer codeString={InputCode.filed} />
  //         </Suspense>
  //       </div>
  //     </div>
  //   </div>
  // );
};

// const InputCode = {
//   overview: [`<!-- Default Input > -->`, `<Input placeholder="placeholder" />`].join(`\n`),
//   clear: [`<!-- Deafult Input> -->`, `<Input placeholder="placeholder" />`, ``, `<!-- Clear Input> -->`, `<Input placeholder="placeholder" clear />`].join(`\n`),
//   filed: [
//     `<!-- Deafult Input > -->`,
//     `<Input placeholder="placeholder" field="text" />`,
//     ``,
//     `<!-- Search Input > -->`,
//     `<Input placeholder="placeholder" field="search" />`,
//     ``,
//     `<!-- Password Input > -->`,
//     `<Input placeholder="placeholder" field="password" />`,
//   ].join(`\n`),
// };

export default InputPage;
