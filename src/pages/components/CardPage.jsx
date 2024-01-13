import { lazy, Suspense } from 'react';

import { Card, CardThumbnail, CardTitle, CardText } from '@/components/hyun-design-system/card';
import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';

const LazyCodeContainer = lazy(() => import('@/components/docs/CodeContainer'));

const CardPage = () => {
  return (
    <div className="docs">
      <div className="docs-card">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. 개요" />
          <Text>Card 컴포넌트를 통해 카드 요소를 생성합니다.</Text>
          <div className="preview fill">
            <div className="card-group">
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={CardCode.overview} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Thmubnail" />
          <Text>
            CardThmubnail 컴포넌트의 &#39;imageUrl&#39; 프로퍼티를 통해 카드 요소에 들어갈 이미지를 지정합니다.
          </Text>
          <div className="preview fill">
            <div className="card-group">
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={CardCode.thumbnail} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Title" />
          <Text>CardTitle 컴포넌트의 &#39;title&#39; 프로퍼티를 통해 카드 요소에 들어갈 제목을 지정합니다.</Text>
          <div className="preview fill">
            <div className="card-group">
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={CardCode.title} />
          </Suspense>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="4. Text" />
          <Text>CardTitle 컴포넌트의 &#39;text&#39; 프로퍼티를 통해 카드 요소에 들어갈 설명을 지정합니다.</Text>
          <div className="preview fill">
            <div className="card-group">
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
              <Card>
                <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />
                <CardTitle title="CardTitle" />
                <CardText text="CardText" />
              </Card>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCodeContainer codeString={CardCode.text} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const CardCode = {
  overview: [
    `<Card>`,
    ` <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />`,
    ` <CardTitle title="CardTitle" />`,
    ` <CardText text="CardText" />`,
    `</Card>`,
  ].join(`\n`),
  thumbnail: [
    `<Card>`,
    ` <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />`,
    ` <CardTitle title="CardTitle" />`,
    ` <CardText text="CardText" />`,
    `</Card>`,
  ].join(`\n`),
  title: [
    `<Card>`,
    ` <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />`,
    ` <CardTitle title="CardTitle" />`,
    ` <CardText text="CardText" />`,
    `</Card>`,
  ].join(`\n`),
  text: [
    `<Card>`,
    ` <CardThumbnail imageUrl={'/public/images/thumbnail.svg'} />`,
    ` <CardTitle title="CardTitle" />`,
    ` <CardText text="CardText" />`,
    `</Card>`,
  ].join(`\n`),
};

export default CardPage;
