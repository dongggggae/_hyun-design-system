import { lazy, Suspense } from 'react';

import { Accordion, AccordionItem } from '@/components/hyun-design-system/accordion';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const AccordionPage = () => {
  return (
    <div className="docs">
      <div className="docs-accrodion">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. 개요" />
          <Text>Accordion 컴포넌트를 통해 아코디언 요소를 생성합니다.</Text>
          <div className="preview fill">
            <Accordion>
              <AccordionItem title="Accordion Title1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={AccordionCode.overview} />
          </Suspense>
        </div>
        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Title" />
          <Text>Title 프로퍼티를 통해 아코디언의 제목을 지정할 수 있습니다.</Text>
          <div className="preview fill">
            <Accordion>
              <AccordionItem title="Accordion Title1">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={AccordionCode.title} />
          </Suspense>
        </div>
        <div className="component-content">
          <Heading tag="h2" size="2" text="3. isOpen" />
          <Text>AccordionItem 컴포넌트의 isOpen 프로퍼티를 통해 해당 컨텐츠가 펼쳐진 채로 나타납니다.</Text>
          <div className="preview fill">
            <Accordion>
              <AccordionItem title="Accordion Title1" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title2" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
              <AccordionItem title="Accordion Title3" isOpen>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam quisquam quae officiis nemo,
                  natus autem placeat optio at qui nobis quod, maxime in aspernatur sint sed eaqueitaque ea.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={AccordionCode.isOpen} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const AccordionCode = {
  overview: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <AccordionItem title="Accordion Title1">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title2">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title3">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </AccordionItem>`,
    `</Accordion>`,
  ].join(`\n`),
  title: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <AccordionItem title="Accordion Title1">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title2">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title3">`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </AccordionItem>`,
    `</Accordion>`,
  ].join(`\n`),
  isOpen: [
    `<!-- Default Accordion -->`,
    ` <Accordion>`,
    `   <AccordionItem title="Accordion Title1" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title2" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `   </AccordionItem>`,
    `   <AccordionItem title="Accordion Title3" isOpen >`,
    `     <p>`,
    `       Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    `       Quas veniam quisquam quae officiis nemo, natus autem placeat optio at qui nobis quod, `,
    `       maxime in aspernatur sint sed eaqueitaque ea.`,
    `     </p>`,
    `    </AccordionItem>`,
    `</Accordion>`,
  ].join(`\n`),
};

export default AccordionPage;
