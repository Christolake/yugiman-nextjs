import type { Config } from 'tailwindcss'

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'calypso': { // skill
        '50': '#ebfffc',
        '100': '#cdfffb',
        '200': '#a1fffb',
        '300': '#61fffc',
        '400': '#1af6f5',
        '500': '#00dadc',
        '600': '#01b0bb',
        '700': '#098a95',
        '800': '#116e79',
        '900': '#135a66',
        '950': '#063d46',
    },
      'scarlet': {
        '50': '#fff4ed',
        '100': '#ffe5d4',
        '200': '#ffc8a8',
        '300': '#ffa171',
        '400': '#ff6f38',
        '500': '#fd4912',
        '600': '#f73008',
        '700': '#c61f08',
        '800': '#9d1a0f',
        '900': '#7e1910',
        '950': '#440806',
    },
      'gold': {
        '50': '#faf9ec',
        '100': '#f3f1ce',
        '200': '#e9e29f',
        '300': '#dccc68',
        '400': '#d0b63f',
        '500': '#c3a332',
        '600': '#a68028',
        '700': '#855f23',
        '800': '#6f4e24',
        '900': '#604123',
        '950': '#372211',
    },
    'koamaru': {
      '50': '#f3f5ff',
      '100': '#e9ecfe',
      '200': '#d7ddfd',
      '300': '#b7c1fb',
      '400': '#8e99f7',
      '500': '#6068f2',
      '600': '#413ee9',
      '700': '#322cd5',
      '800': '#2a25b2',
      '900': '#252092',
      '950': '#121263',
    },
  
      ygospell: '#1d9e74',
      'genoa': {  //spell
        '50': '#f1fcf9',
        '100': '#cff8ed',
        '200': '#9ef1dc',
        '300': '#66e2c7',
        '400': '#37caaf',
        '500': '#1eae96',
        '600': '#148675',
        '700': '#157064',
        '800': '#165951',
        '900': '#164b44',
        '950': '#072c2a',
    },    
      ygotrap: '#bc5a84',
      'hibiscus': { //trap
        '50': '#fcf3fa',
        '100': '#fae9f6',
        '200': '#f6d4ed',
        '300': '#f0b1de',
        '400': '#e581c7',
        '500': '#d95bb0',
        '600': '#c73b92',
        '700': '#a82a75',
        '800': '#8e2663',
        '900': '#772454',
        '950': '#480f30',
    },    
      trap: '#E91E63',
      ygotoken: '#727e75',
      'americano': {  //token
        '50': '#f4f3f2',
        '100': '#e3e1de',
        '200': '#cac3be',
        '300': '#aba199',
        '400': '#93857c',
        '500': '#85776f',
        '600': '#71625d',
        '700': '#5b4f4d',
        '800': '#4f4644',
        '900': '#463d3d',
        '950': '#272221',
    }, 
      ygonormal: '#fde68a',
      'twine': { //normal
        '50': '#f8f5ee',
        '100': '#efe7d2',
        '200': '#e0d1a8',
        '300': '#ceb176',
        '400': '#c09751',
        '500': '#b08242',
        '600': '#976837',
        '700': '#7a4e2e',
        '800': '#67412c',
        '900': '#59382a',
        '950': '#331d15',
    },
    'marigold': {
      '50': '#faf8ec',
      '100': '#f3efce',
      '200': '#e9dd9f',
      '300': '#dcc568',
      '400': '#d1ad3e',
      '500': '#c29931',
      '600': '#a67828',
      '700': '#855923',
      '800': '#704923',
      '900': '#603e23',
      '950': '#372011',
  },  
      ygoeffect: '#FF8B53',
      'copper': { //effect
        '50': '#fcf7f0',
        '100': '#f7ecdd',
        '200': '#eed6ba',
        '300': '#e2b88f',
        '400': '#d69561',
        '500': '#cd7a42',
        '600': '#c66839',
        '700': '#9f4f2f',
        '800': '#80402c',
        '900': '#673627',
        '950': '#371b13',
    },    
      ygoritual: '#538dd5',
      ritual: '#2196F3', //blue
      'san-marino': { //ritual
        '50': '#f3f7fb',
        '100': '#e5ecf4',
        '200': '#d1deec',
        '300': '#b1c9df',
        '400': '#8baccf',
        '500': '#6f93c2',
        '600': '#5878b2',
        '700': '#516ba4',
        '800': '#465887',
        '900': '#3c4a6c',
        '950': '#282f43',
    },
    'mariner': {
      '50': '#f2f7fd',
      '100': '#e5edf9',
      '200': '#c5daf2',
      '300': '#92bce7',
      '400': '#5798d9',
      '500': '#337fcc',
      '600': '#2260a7',
      '700': '#1d4e87',
      '800': '#1b4271',
      '900': '#1c395e',
      '950': '#13253e',
  },
  'cerulean': {
    '50': '#f0f8ff',
    '100': '#e0f1fe',
    '200': '#bbe3fc',
    '300': '#7fcdfa',
    '400': '#3bb4f5',
    '500': '#108dd1',
    '600': '#057bc4',
    '700': '#06629e',
    '800': '#095383',
    '900': '#0e466c',
    '950': '#092c48',
},
      ygofusion: '#a086b7',
      'affair': { //fusion
        '50': '#fbf7fc',
        '100': '#f7eef9',
        '200': '#eddcf2',
        '300': '#e0c1e6',
        '400': '#cd9bd7',
        '500': '#b573c2',
        '600': '#8c4d97',
        '700': '#7f4388',
        '800': '#693870',
        '900': '#58325d',
        '950': '#37183a',
    },    
      fusion: '#9c27b0',
      ygosynchro: '#EEEEEE',
      'alto': { //synchro
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dedede',
        '300': '#c8c8c8',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
    },
      'silver': { //synchro
        '50': '#f7f7f7',
        '100': '#ededed',
        '200': '#dfdfdf',
        '300': '#cccccc',
        '400': '#adadad',
        '500': '#999999',
        '600': '#888888',
        '700': '#7b7b7b',
        '800': '#676767',
        '900': '#545454',
        '950': '#363636',
    },
      ygoxyz: '#334155',
      ygolink: '#00008B',
      'matisse': {  //link
        '50': '#f2f8fd',
        '100': '#e4eefa',
        '200': '#c2dcf5',
        '300': '#8dc1ec',
        '400': '#50a1e0',
        '500': '#2a86cd',
        '600': '#1b69ae',
        '700': '#185894',
        '800': '#174875',
        '900': '#183d62',
        '950': '#102741',
    },    
      link: '#3F51B5', //indigo
    }
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })]
}
export default config
