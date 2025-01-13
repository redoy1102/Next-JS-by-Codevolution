import './App.css'
import CakeView from './features/cake/cakeView'
import IceCreamView from './features/iceCream/IceCreamView'
import UserView from './components/UserView'
import CommentsView from './components/CommentsView'

function App() {

  return (
      <>
      <CommentsView />
        <IceCreamView />
        <CakeView />
        <UserView />
      </>
  )
}

export default App
