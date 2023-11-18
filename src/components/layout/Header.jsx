import Heading from '../hyun-design-system/typography/Heading';

const Header = () => {
  const PREFIX = 'Header';

  return (
    <header className={PREFIX}>
      <div className="HeaderInner">
        <Heading as="h2" size={3} text="HEADER" />
      </div>
    </header>
  );
};
export default Header;
