import AccordionPage from '../pages/components/AccordionPage';
import BadgePage from '../pages/components/BadgePage';
import ButtonPage from '../pages/components/ButtonPage';
import CardPage from '../pages/components/CardPage';
import InputPage from '../pages/components/forms/InputPage';
import SelectPage from '../pages/components/forms/SelectPage';
import SwitchPage from '../pages/components/forms/SwitchPage';
import ColorPage from '../pages/components/foundation/ColorPage';
import HeadingPage from '../pages/components/foundation/HeadingPage';
import TextPage from '../pages/components/foundation/TextPage';
import IconPage from '../pages/components/IconPage';
import ModalPage from '../pages/components/ModalPage';
import TablePage from '../pages/components/TablePage';
import TabPage from '../pages/components/TabPage';
import Test from '../pages/components/Test';

const navData = [
  {
    type: 'group',
    name: 'Foundation',
    to: 'components/foundation',
    children: [
      { name: 'Heading', to: 'components/foundation/HeadingPage', component: HeadingPage },
      { name: 'Text', to: 'components/foundation/TextPage', component: TextPage },
      { name: 'Color', to: 'components/foundation/ColorPage', component: ColorPage },
    ],
  },
  {
    type: 'group',
    name: 'Forms',
    to: 'components/forms',
    children: [
      { name: 'Input', to: 'components/forms/InputPage', component: InputPage },
      { name: 'Select', to: 'components/forms/SelectPage', component: SelectPage },
      { name: 'Switch', to: 'components/forms/SwitchPage', component: SwitchPage },
    ],
  },
  { name: 'Accordion', to: 'components/AccordionPage', component: AccordionPage },
  { name: 'Badge', to: 'components/BadgePage', component: BadgePage },
  { name: 'Card', to: 'components/CardPage', component: CardPage },
  { name: 'Button', to: 'components/ButtonPage', component: ButtonPage },
  { name: 'Icon', to: 'components/IconPage', component: IconPage },
  { name: 'Table', to: 'components/TablePage', component: TablePage },
  { name: 'Tab', to: 'components/TabPage', component: TabPage },
  { name: 'Modal', to: 'components/ModalPage', component: ModalPage },
  { name: 'Test', to: 'components/Test', component: Test },
];
export default navData;
