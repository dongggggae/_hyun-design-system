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
  { name: 'Accordion', to: 'components/AccordionPage', component: 'AccordionPage' },
  { name: 'Badge', to: 'components/BadgePage', component: 'BadgePage' },
  { name: 'Button', to: 'components/ButtonPage', component: 'ButtonPage' },
  { name: 'Icon', to: 'components/IconPage', component: 'IconPage' },
  { name: 'Table', to: 'components/TablePage', component: 'TablePage' },
  { name: 'Tab', to: 'components/TabPage', component: 'TabPage' },
];
export default navData;
