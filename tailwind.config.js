/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors:{
      header:'rgba(18, 24, 41, 0.80)',
      search: 'rgba(0, 0, 0, 0.40)',
      film: 'rgba(0, 0, 0, 0.65)',
      tabs: 'rgba(0, 0, 0, .20)',
    },
    padding:{
      pxM: 'clamp(1.25rem, 0.921rem + 1.64vw, 2rem)',
      filmPx: 'clamp(0rem, -21.25rem + 40vw, 5rem)'
    },

    fontSize: {
      title: 'clamp(2.5rem, 1.842rem + 3.29vw, 4rem)',
      text: 'clamp(1rem, 0.89rem + 0.55vw, 1.25rem)',
      titleF: 'clamp(2.5rem, 1.678rem + 4.11vw, 4.375rem)',
      titleSlide: 'clamp(1.25rem, 0.839rem + 2.05vw, 2.188rem)'
    },

    gap: {
      header: 'clamp(1.875rem, 1.382rem + 2.47vw, 3rem)',
      filmPage: 'clamp(1.875rem, -11.406rem + 25vw, 5rem)'
    },

    maxWidth: {
      imgW: 'clamp(26.25rem, 10.313rem + 30vw, 30rem)'
    },

    height: {
      imgH: 'clamp(28.125rem, 20.728rem + 36.99vw, 45rem)',
      video: 'clamp(18.75rem, 10.531rem + 41.1vw, 37.5rem)'
    },

    margin: {
      mtF: 'clamp(1.875rem, -0.591rem + 12.33vw, 7.5rem)',
      ms: 'clamp(0rem, -13.281rem + 25vw, 3.125rem)'
    },

    borderRadius: {
      rad: 'clamp(1.875rem, 0.779rem + 5.48vw, 4.375rem)'
    }

  },
  plugins: [],
}

