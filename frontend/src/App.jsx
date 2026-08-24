import Home from './components/home'
import Component2 from './components/component2'

function App() {
  if (window.location.pathname === '/component2' || window.location.pathname === '/plantation-health') {
    return <Component2 />
  }

  return <Home />
}

export default App
