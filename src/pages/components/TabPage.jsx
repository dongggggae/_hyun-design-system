import { lazy, Suspense } from 'react';

import { TabContainer, Tab } from '@/components/hyun-design-system/tabs';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const TabPage = () => {
  return (
    <div className="docs">
      <div className="docs-tab">
        <div className="component-content">
          <Heading as="h2" size="2" text="1. 개요" />
          <Text>TabContainer 컴포넌트를 통해 탭 요소를 생성합니다.</Text>
          <div className="preview fill">
            <TabContainer defaultActiveKey={1} fill>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>
          </div>
          <div className="code-box">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyCodeContainer codeString={TabCode.overview} />
            </Suspense>
          </div>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="2. Style" />
          <Text>탭 스타일은 type 프로퍼티를 통해 변경합니다. 기본 값은 &#39;tab&#39; 입니다.</Text>
          <div className="preview fill">
            <TabContainer defaultActiveKey={1} fill>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>
            <TabContainer defaultActiveKey={1} fill type={'pills'}>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>
            <TabContainer defaultActiveKey={1} fill type={'inlines'}>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={TabCode.style} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading as="h2" size="2" text="3. fill" />
          <Text>탭의 fill 속성은 사용 가능한 모든 공간을 채울 수 있게 지정합니다. 기본값은 false입니다.</Text>
          <div className="preview">
            <TabContainer defaultActiveKey={1}>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>

            <TabContainer defaultActiveKey={1} fill>
              <Tab title="Tab Title1" eventKey={1}>
                Tab Content1
              </Tab>
              <Tab title="Tab Title2" eventKey={2}>
                Tab Content2
              </Tab>
              <Tab title="Tab Title3" eventKey={3}>
                Tab Content3
              </Tab>
            </TabContainer>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={TabCode.fill} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const TabCode = {
  overview: [
    `<TabContainer defaultActiveKey={1}>`,
    `  <Tab title="Tab Title1" eventKey={1}>`,
    `    Tab Content1                       `,
    `  </Tab>`,
    `  <Tab title="Tab Title2" eventKey={2}>`,
    `    Tab Content2`,
    `  </Tab>`,
    `  <Tab title="Tab Title3" eventKey={3}>`,
    `    Tab Content3`,
    `  </Tab>`,
    `</TabContainer>`,
  ].join(`\n`),
  style: [
    `<!-- Default Tab -->`,
    `<TabContainer defaultActiveKey={1}>`,
    `  <Tab title="Tab Title1" eventKey={1}>`,
    `    Tab Content1                       `,
    `  </Tab>`,
    `  <Tab title="Tab Title2" eventKey={2}>`,
    `    Tab Content2`,
    `  </Tab>`,
    `  <Tab title="Tab Title3" eventKey={3}>`,
    `    Tab Content3`,
    `  </Tab>`,
    `</TabContainer>`,
    ``,
    `<!-- Pills Tab  -->`,
    `<TabContainer defaultActiveKey={1} type={'pills'}>`,
    `  <Tab title="Tab Title1" eventKey={1}>`,
    `    Tab Content1                       `,
    `  </Tab>`,
    `  <Tab title="Tab Title2" eventKey={2}>`,
    `    Tab Content2`,
    `  </Tab>`,
    `  <Tab title="Tab Title3" eventKey={3}>`,
    `    Tab Content3`,
    `  </Tab>`,
    `</TabContainer>`,
    ``,
    `<!-- Inlines Tab -->`,
    `<TabContainer defaultActiveKey={1} type={'inlines'}>`,
    `  <Tab title="Tab Title1" eventKey={1}>`,
    `    Tab Content1                       `,
    `  </Tab>`,
    `  <Tab title="Tab Title2" eventKey={2}>`,
    `    Tab Content2`,
    `  </Tab>`,
    `  <Tab title="Tab Title3" eventKey={3}>`,
    `    Tab Content3`,
    `  </Tab>`,
    `</TabContainer>`,
  ].join(`\n`),
  fill: [
    `<TabContainer defaultActiveKey={1} fill>`,
    `  <Tab title="Tab Title1" eventKey={1}>`,
    `    Tab Content1                       `,
    `  </Tab>`,
    `  <Tab title="Tab Title2" eventKey={2}>`,
    `    Tab Content2`,
    `  </Tab>`,
    `  <Tab title="Tab Title3" eventKey={3}>`,
    `    Tab Content3`,
    `  </Tab>`,
    `</TabContainer>`,
  ].join(`\n`),
};

export default TabPage;
