// function App() {
//   return (
//     <div>
//       <h1>chai aur react with vite | uday kiran pillalamarri</h1>
//     </div>
//   )
// }

// export default App



import React from "react";
// import Main from "./Main.jsx";
import ReactDOM from 'react-dom/client'


function Main() {
  return (
      <div>
          <h1>In the main file | just a function inside the app.js</h1>
      </div>
  )
}


// const ReactEleGoogle = {
//   type:'a',
//   props: {
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'click here to visit google'
// }

const name = '| uday kiran'
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com', target : '_blank'},
  "click me to visit google",
  name
)


const AnotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // Main()
  // AnotherElement
  ReactElement
)