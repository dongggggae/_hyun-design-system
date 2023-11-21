import Heading from '../hyun-design-system/typography/Heading';

const LayoutHeader = () => {
  const PREFIX = 'header';

  return (
    <header className={PREFIX}>
      <div className="header__inner">
        <Heading as="h2" size={3} text="HEADER" />
      </div>
    </header>
  );
};
export default LayoutHeader;
