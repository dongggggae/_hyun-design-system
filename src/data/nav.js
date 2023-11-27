const navData = [
  {
    type: 'group',
    name: 'Foundation',
    to: 'components/foundation',
    children: [
      { name: 'Heading', to: 'components/foundation/HeadingPage' },
      { name: 'Text', to: 'components/foundation/TextPage' },
      { name: 'Color', to: 'components/foundation/ColorPage' },
    ],
  },
  {
    type: 'group',
    name: 'Forms',
    to: 'components/forms',
    children: [
      { name: 'Input', to: 'components/forms/InputPage' },
      { name: 'Select', to: 'components/forms/SelectPage' },
      { name: 'Switch', to: 'components/forms/SwitchPage' },
    ],
  },
  { name: 'Accordion', to: 'components/AccordionPage' },
  { name: 'Badge', to: 'components/BadgePage' },
  { name: 'Button', to: 'components/ButtonPage' },
  { name: 'Icon', to: 'components/IconPage' },
];
export default navData;
