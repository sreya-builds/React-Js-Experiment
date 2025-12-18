
import box from "./app.js";
import square from "./test.js";
import circle from "./circle.js";
const root = ReactDOM.createRoot(document.querySelector('.container'))
root.render([box(),square(),circle()])
