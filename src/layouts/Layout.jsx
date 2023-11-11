import Header from '../components/layout/Header';
import MySidebar from '../components/layout/MySidebar';
import Main from '../components/layout/Main';
import Typography from '../pages/components/Typography';

const Layout = () => {
  const PREFIX = 'Wrap';
  return (
    <div className={PREFIX}>
      <Header></Header>
      <MySidebar></MySidebar>
      <Main>
        <Typography></Typography>
      </Main>
    </div>
  );
};
export default Layout;
