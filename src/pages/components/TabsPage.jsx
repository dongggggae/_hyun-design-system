import Tab from '../../components/hyun-design-system/tabs/Tab';
import TabContainer from '../../components/hyun-design-system/tabs/TabContainer';

const ComponentPage = () => {
  return (
    <TabContainer id="test" defaultActiveKey={1}>
      <Tab title="Tab 1 title" eventKey={1}>
        Tab 1 content
      </Tab>
      <Tab title="Tab 2 title" eventKey={2}>
        Tab 2 content
      </Tab>
    </TabContainer>
  );
};

export default ComponentPage;
