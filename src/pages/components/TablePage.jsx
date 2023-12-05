import { lazy, Suspense } from 'react';

import { Table, TableRow, TableHeader, TableData, TableBody, TableHead } from '../../components/hyun-design-system/table';
import Heading from '../../components/hyun-design-system/typography/Heading';
import Text from '../../components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('../../components/docs/CodeContainer'));

const ComponentPage = () => {
  return (
    <div className="docs">
      <div className="docs-table">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>Table 컴포넌트를 통해 테이블 요소를 생성합니다.</Text>
          <div className="preview fill">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Header1</TableHeader>
                  <TableHeader>Header2</TableHeader>
                  <TableHeader>Header3</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHeader>Header1</TableHeader>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Header2</TableHeader>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Header2</TableHeader>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
                <TableRow>
                  <TableHeader>Header2</TableHeader>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className='code-box'>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCodeContainer codeString={TableCode.overview} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCodeContainer codeString={TableCode.overview2} />
            </Suspense>
          </div>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. colSpan,rowSpan" />
          <Text>colSpan 및 rowSpan 프로퍼티를 활용하여 테이블 아이템의 열 및 행 병합을 지정할 수 있습니다.</Text>
          <div className="preview">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Header1</TableHeader>
                  <TableHeader>Header2</TableHeader>
                  <TableHeader>Header3</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableData rowSpan={2}>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
                <TableRow>
                  <TableData colSpan={2}>Data1</TableData>
                  <TableData>Data2</TableData>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={TableCode.span} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. active" />
          <Text>TableRow 컴포넌트에 active 프로퍼티를 통해 선택한 스타일을 적용할 수 있습니다.</Text>
          <div className="preview">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Header1</TableHeader>
                  <TableHeader>Header2</TableHeader>
                  <TableHeader>Header3</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow active>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Data1</TableData>
                  <TableData>Data2</TableData>
                  <TableData>Data3</TableData>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={TableCode.span} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const TableCode = {
  overview: [
    `<Table>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
  overview2: [
    ``,
    `<Table>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
    ``,
    ``,
    
  ].join(`\n`),
  span: [
    `<Table>`,
    `  <TableHead>`,
    `   <TableRow>`,
    `     <TableHeader>Header1</TableHeader>`,
    `     <TableHeader>Header2</TableHeader>`,
    `     <TableHeader>Header3</TableHeader>`,
    `   </TableRow>`,
    ` </TableHead>`,
    ` <TableBody>`,
    `   <TableRow>`,
    `     <TableData rowSpan={2}>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `     <TableData>Data3</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    `   <TableRow>`,
    `     <TableData colSpan={2}>Data1</TableData>`,
    `     <TableData>Data2</TableData>`,
    `   </TableRow>`,
    ` </TableBody>`,
    `</Table>`,
  ].join(`\n`),
};

export default ComponentPage;
