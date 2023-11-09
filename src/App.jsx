import CodeContainer from './components/docs/CodeContainer';
import Heading from './components/hyun-design-system/typography/Heading';
import Text from './components/hyun-design-system/typography/Text';
import Button from './components/hyun-design-system/button/Button';

const App = () => {
  return (
    <div className="App">
      <Heading as="h5" size={3} text="Heading" />
      <CodeContainer />
      <Text size="lg">Textextextextext</Text>
      <Button variant="primary" size="lg" text="asdasdasd"></Button>
      <Button variant="secondary" size="lg" text="asdasdasd"></Button>
      <Button variant="tertiary" size="lg" text="asdasdasd"></Button>
    </div>
  );
};

export default App;
