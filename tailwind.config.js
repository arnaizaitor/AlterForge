/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './creator/**/*.html',
    './about/**/*.html',
    './gallery/**/*.html',
    './theme/**/*.html',
    './print/**/*.html',
    './tutorial/**/*.html',
    './legal/**/*.html'
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        slatebase: '#0f172a',
        slatepanel: '#111827',
        slatepanelsoft: '#1f2937',
        accent: '#3b82f6',
        accentsoft: '#93c5fd'
      },
      boxShadow: {
        panel: '0 16px 40px rgba(2, 6, 23, 0.42)',
        soft: '0 8px 20px rgba(2, 6, 23, 0.28)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    }
  },
  plugins: []
};
