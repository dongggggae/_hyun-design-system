import Header from '../components/layout/Header';
import MySidebar from '../components/layout/MySidebar';
import Main from '../components/layout/Main';
import Btn from '../pages/components/Btn';

const Layout = () => {
  const PREFIX = 'Wrap';
  return (
    <div className={PREFIX}>
      <Header></Header>
      <MySidebar></MySidebar>
      <Main>
        <Btn></Btn>
      </Main>
    </div>
  );
};
export default Layout;
