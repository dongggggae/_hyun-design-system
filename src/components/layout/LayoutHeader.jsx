import React from 'react';

import Heading from '@/components/hyun-design-system/typography/Heading';

const LayoutHeader = React.memo(() => {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <div className="header__inner">
        <Heading tag="h2" size="3" text="HEADER" />
      </div>
    </header>
  );
});

LayoutHeader.displayName = 'LayoutHeader';

export default LayoutHeader;
