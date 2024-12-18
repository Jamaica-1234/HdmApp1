/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontfamily:{
    
        OpenSans_Light:["OpenSans-Light","sans-serif"],

        Protest_Guerrilla:["ProtestGuerrilla","Regular"],

    },
  },
  plugins: ["nativewind/babel"],
}
}
