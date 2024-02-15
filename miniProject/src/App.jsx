import './App.css'
import Cart from './components/Cart'
import Items from './components/Items'
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <div className='app-component'>
      <ContextProvider>
        <Items/>
        <Cart/>
      </ContextProvider>
    </div>
  )
}

export default App
