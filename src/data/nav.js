const navData = [
  {
    type: 'group',
    name: 'Foundation',
    to: 'components/foundation',
    children: [
      { name: 'Heading', to: 'components/foundation/HeadingPage', component: 'HeadingPage' },
      { name: 'Text', to: 'components/foundation/TextPage', component: 'TextPage' },
      { name: 'Color', to: 'components/foundation/ColorPage', component: 'ColorPage' },
    ],
  },
  {
    type: 'group',
    name: 'Forms',
    to: 'components/forms',
    children: [
      { name: 'Input', to: 'components/forms/InputPage', component: 'InputPage' },
      { name: 'Select', to: 'components/forms/SelectPage', component: 'SelectPage' },
      { name: 'Switch', to: 'components/forms/SwitchPage', component: 'SwitchPage' },
    ],
  },
  { name: 'Accordion', to: 'components/AccordionPage' },
  { name: 'Badge', to: 'components/BadgePage' },
  { name: 'Button', to: 'components/ButtonPage' },
  { name: 'Icon', to: 'components/IconPage' },
  { name: 'Table', to: 'components/TablePage' },
  { name: 'Tab', to: 'components/TabPage' },
  { name: 'Modal', to: 'components/ModalPage' },
];
export default navData;
