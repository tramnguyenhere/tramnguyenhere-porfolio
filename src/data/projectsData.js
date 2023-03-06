import { v4 as uuid } from 'uuid';
const projectsData = [
  {
    id: uuid(),
    name: 'Personal Portfolio - verson 2.0',
    image: 'personal-portfolio-v2.png',
    description:
      '[Ongoing] Redesigned Personal Portfolio of a Frontend developer with Vue.js',
    sourceCode: 'https://github.com/tramnguyenhere/portfolio-v2.git',
    demoLink: 'https://tramnguyenhere-portfolio-v2.netlify.app/',
    tech: ['html', 'js', 'vuejs', 'sass'],
  },
  {
    id: uuid(),
    name: 'A Space',
    image: 'a-space.png',
    description:
      '🌇  A customizable virtual workspace with white noise and music options to enhance focus and productivity',
    sourceCode: 'https://github.com/tramnguyenhere/working_background-app.git',
    demoLink: 'https://aspace-tramnguyenhere.netlify.app/',
    tech: ['ts', 'reactjs', 'redux', 'sass'],
  },
  {
    id: uuid(),
    name: 'Wishlist - Christmas 2022 edition',
    image: 'wishlist.png',
    description: '💫 Customized Wishlist application',
    sourceCode: 'https://github.com/tramnguyenhere/wishlist-app.git',
    demoLink: 'https://wishlist-application-tramnguyenhere.fly.dev/',
    tech: [
      'js',
      'reactjs',
      'redux',
      'sass',
      'bootstrap',
      'mongodb',
      'firebase',
    ],
  },
  {
    id: uuid(),
    name: 'Measurement converter for cooking',
    image: 'measurement-converter.png',
    description: '🍽 A measurement converter for your kitchen',
    sourceCode:
      'https://github.com/tramnguyenhere/ingredient-measurement-converter.git',
    demoLink: 'https://ingredientmeasurementconverter.netlify.app/',
    tech: ['js', 'reactjs', 'sass', 'bootstrap'],
  },
  {
    id: uuid(),
    name: 'Personal Portfolio',
    image: 'personal-portfolio.png',
    description: '🌈 Personal Portfolio of a Frontend developer',
    sourceCode: 'https://github.com/tramnguyenhere/tramnguyenhere-porfolio',
    demoLink: 'https://tramnguyenhere-portfolio.netlify.app/',
    tech: ['js', 'reactjs', 'sass', 'figma'],
  },
  {
    id: uuid(),
    name: 'English Dictionary',
    image: 'english-dictionary.png',
    description:
      '📖 A minimal English dictionary with pronunciation - data retrieved from Dictionary API',
    sourceCode:
      'https://github.com/tramnguyenhere/english-dictionary-react.git',
    demoLink: 'https://english-dictionary-tramnguyenhere.netlify.app/',
    tech: ['js', 'reactjs', 'css'],
  },
  {
    id: uuid(),
    name: 'Digital Cooking Recipes',
    image: 'cooking-recipes.png',
    description:
      '🍱 A digital cooking recipes - data retrieved from Spoonacular API',
    sourceCode:
      'https://github.com/tramnguyenhere/cooking-recipe-app-react.git',
    demoLink: 'https://cooking-recipe-tramnguyenhere.netlify.app/',
    tech: ['js', 'reactjs', 'css', 'styledcomponent'],
  },
];

export default projectsData;
