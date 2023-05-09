/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#5af498",
                
        "secondary": "#96d668",
                
        "accent": "#81db6d",
                
        "neutral": "#212430",
                
        "base-100": "#EDECEE",
                
        "info": "#44ACC1",
                
        "success": "#2BDEC9",
                
        "warning": "#EBBF1E",
                
        "error": "#FC2255",
        },
      },
    ],
  },
  plugins: [ require("daisyui") ],
}

