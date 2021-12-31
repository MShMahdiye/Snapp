module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "cursive"],
        Jomhuria:["Jomhuria"]
       },
       backgroundImage:{
         'pattern' : "url('https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_mobile.jpg')"
       }
    },
  },
  plugins: [],
}
