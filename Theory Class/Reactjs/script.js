
let h1 = React.createElement('h1',null,'Sheryians Is Best')
let h2 = React.createElement('h2',null,'Creative Web Dev Is Best')

var div = React.createElement('div',null,[h1,h2])
var root = ReactDOM.createRoot(document.querySelector('#parent'))
root.render(div)


var p = React.createElement('p',null,'Hello, From Today we are starting ReactJs')
var children = document.querySelector('.children')

var roots = ReactDOM.createRoot(children)
roots.render(p)

