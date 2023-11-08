import CodeContainer from './components/docs/CodeContainer';
import Heading from './components/hyun-design-system/typography/Heading';
import Text from './components/hyun-design-system/typography/Text';

const App = () => {
  return (
    <div className="App">
      <Heading as="h2" text="Heading" />
      <CodeContainer />
      <Text size="lg" text="asdasdasdaㅁㄴㅇ" />
    </div>
  );
};

export default App;
