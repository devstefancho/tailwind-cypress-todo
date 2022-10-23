/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;`
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '4.2rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        h2: ['2.6rem', { lineHeight: '3.6rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        h3: ['2.4rem', { lineHeight: '3.4rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        h4: ['2.2rem', { lineHeight: '3.1rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        h5: ['2rem', { lineHeight: '2.8rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        'h6-regular': ['1.8rem', { lineHeight: '2.5rem', fontWeight: '400', letterSpacing: '-0.02em'}],
        'h6-semi': ['1.8rem', { lineHeight: '2.5rem', fontWeight: '600', letterSpacing: '-0.02em'}],
        'h6-bold': ['1.8rem', { lineHeight: '2.5rem', fontWeight: '700', letterSpacing: '-0.02em'}],
        body1: ['1.6rem', { lineHeight: '2.2rem', fontWeight: '400', letterSpacing: '-0.02em'}],
        body2: ['1.4rem', { lineHeight: '2.0rem', fontWeight: '400', letterSpacing: '-0.02em'}],
      }
    },
  },
  plugins: [],
}
