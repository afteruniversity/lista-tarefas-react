import './App.css'
import LayoutTeste from './layout/LayoutTeste'
import ComponenteTeste from './components/ComponenteTeste'

function App() {
  return (
    <LayoutTeste>
      <ComponenteTeste numComponente={1}/>
      <p></p>
      <ComponenteTeste numComponente={2}/>
      <ComponenteTeste numComponente={3}/>
      <ComponenteTeste numComponente={4}/>
      <ComponenteTeste numComponente={5}/>
    </LayoutTeste>
  )
}

export default App
