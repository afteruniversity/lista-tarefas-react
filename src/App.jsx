import './App.css'
import Layout from './layout/Layout.jsx'
import ComponenteTeste from './components/ComponenteTeste'

function App() {
  return (
    <Layout>
      <ComponenteTeste numComponente={1}/>
      <p></p>
      <ComponenteTeste numComponente={2}/>
      <ComponenteTeste numComponente={3}/>
      <ComponenteTeste numComponente={4}/>
      <ComponenteTeste numComponente={5}/>
    </Layout>
  )
}

export default App;
