import { v4 as uuid } from 'uuid';

/**
 PL: Programming Language,
 SSL: Style Sheet Language
 */

const programmingLanguage = [
  {
    id: uuid(),
    code: 'html',
    name: 'HTML',
    type: 'PL',
  },
  {
    id: uuid(),
    code: 'css',
    name: 'CSS',
    type: 'SSL',
  },
  {
    id: uuid(),
    code: 'sass',
    name: 'SASS',
    type: 'SSL',
  },
  {
    id: uuid(),
    code: 'js',
    name: 'JavaScript',
    type: 'PL',
  },
  {
    id: uuid(),
    code: 'ts',
    name: 'TypeScript',
    type: 'PL',
  },
];

const others = [
  {
    id: uuid(),
    code: 'reactjs',
    name: 'ReactJs',
    type: 'library',
  },
  {
    id: uuid(),
    code: 'nodejs',
    name: 'NodeJs',
    type: 'library',
  },
  {
    id: uuid(),
    code: 'redux',
    name: 'Redux',
    type: 'library',
  },
  {
    id: uuid(),
    code: 'mongodb',
    name: 'MongoDB',
    type: 'others',
  },
  { id: uuid(), code: 'github', name: 'Github', type: 'others' },
  {
    id: uuid(),
    code: 'figma',
    name: 'Figma',
    type: 'others',
  },
];

export { programmingLanguage, others };
