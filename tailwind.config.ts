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
      ygospell: '#1d9e74',
      ygotrap: '#bc5a84',
      ygotoken: '#727e75',
      ygonormal: '#fde68a',
      ygoeffect: '#FF8B53',
      ygoritual: '#538dd5',
      ygofusion: '#a086b7',
      ygosynchro: '#EEEEEE',
      ygoxyz: '#334155',
      ygolink: '#00008B',
    }
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
  })]
}
export default config
