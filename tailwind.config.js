/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        sectionPadding: '40px',
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },

      container: {
        center: true, // Centers the container
        padding: {
          DEFAULT: "20px", // Default padding for all screen sizes
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "20px",
          xxl: "20px",
        },
      },
      maxWidth: {
        xxl: "1200px", // Set the max-width for xxl screens
      },

    },
  },
  plugins: [],
}
