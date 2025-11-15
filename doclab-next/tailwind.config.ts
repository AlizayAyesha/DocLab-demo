import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': 'hsl(222, 44%, 8%)',
        'middle-blue-green': 'hsla(174, 64%, 71%, 0.4)',
        'midnight-green': 'hsl(186, 100%, 19%)',
        'midnight-green-a25': 'hsla(186, 100%, 19%, 0.25)',
        'independence': 'hsl(236, 14%, 39%)',
        'verdigris': 'hsl(182, 100%, 35%)',
        'ming': 'hsl(186, 72%, 24%)',
        'space-cadet': 'hsla(226, 45%, 24%)',
        'eerie-black': 'hsl(0, 0%, 13%)',
        'alice-blue': 'hsl(187, 25%, 94%)',
        'gray-web': 'hsl(0, 0%, 50%)',
        'gainsboro': 'hsl(0, 0%, 87%)',
        'white-a20': 'hsla(0, 0%, 100%, 0.2)',
        'white-a10': 'hsla(0, 0%, 100%, 0.1)',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        'headline-lg': ['5rem', { lineHeight: '1.2', fontWeight: '500' }],
        'headline-md': ['3rem', { lineHeight: '1.3' }],
        'headline-sm': ['2rem', { lineHeight: '1.3' }],
        'title-lg': '1.8rem',
        'title-md': '1.5rem',
        'title-sm': '1.4rem',
      },
      fontWeight: {
        'fw-500': '500',
        'fw-700': '700',
      },
      transitionDuration: {
        't1': '0.25s',
        't2': '0.5s',
        't3': '1s',
      },
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.05, 0.83, 0.52, 0.97)',
      },
      spacing: {
        'section-padding': '120px',
      },
      boxShadow: {
        '1': '0px 2px 20px hsla(209, 36%, 72%, 0.2)',
        '2': '0 4px 16px hsla(0, 0%, 0%, 0.06)',
      },
      borderRadius: {
        '12': '12px',
        '6': '6px',
        '4': '4px',
        'circle': '50%',
      },
    },
  },
  plugins: [],
}
export default config
