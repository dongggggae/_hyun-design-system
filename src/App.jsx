import CodeContainer from './components/docs/CodeContainer';
import Heading from './components/hyun-design-system/typography/Heading';
import Text from './components/hyun-design-system/typography/Text';
import Button from './components/hyun-design-system/button/Button';


const App = () => {
  return (
    <div className="App">
      
      <Heading as="h2" text="Heading" />
      <CodeContainer />
      <Text size="lg">Textextextextext</Text>
      <Button type="primary">asdasdasd</Button>
      <Button type="secondary">asdasdasd</Button>
      <Button type="tertiary">asdasdasd</Button>
    </div>
  );
};

export default App;
