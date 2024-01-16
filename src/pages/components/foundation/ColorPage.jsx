import Heading from '@/components/hyun-design-system/typography/Heading';
import Text from '@/components/hyun-design-system/typography/Text';
import colors from '@/themes/default/tokens/colors';

const ColorPage = () => {
  const colorKeys = Object.keys(colors);

  return (
    <div className="docs">
      <div className="docs-color">
        <div className="component-content">
          <Heading tag="h2" size="2" text="1. Gray" />
          <Text>다음은 Gray Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(0, 17).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="2. Red & Ember" />
          <Text>다음은 Red & Ember Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(17, 27).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>

        <div className="component-content">
          <Heading tag="h2" size="2" text="3. Green & Blue & Navy" />
          <Text>다음은 Green & Blue & Navy Scale을 나타냅니다.</Text>
          <div className="color__wrap">
            {colorKeys.slice(27, 43).map((color, index) => (
              <div className="color__unit" key={index}>
                <div className="color__box" style={{ backgroundColor: colors[color] }}></div>
                <Text>{color}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPage;
