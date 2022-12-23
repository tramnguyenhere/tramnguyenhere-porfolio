import { v4 as uuid } from 'uuid';
const navbarData = [
  {
    key: uuid(),
    name: 'home',
    href: '/',
  },
  {
    key: uuid(),
    name: 'my story',
    href: '#aboutme',
  },
  {
    key: uuid(),
    name: 'my skills',
    href: '#skillsets',
  },
  {
    key: uuid(),
    name: 'my works',
    href: '#works',
    className: 'link',
  },
  {
    key: uuid(),
    name: 'contact',
    href: '#contact',
  },
];

export default navbarData;
