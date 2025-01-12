import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';
import CommentsContainer from './components/CommentsContainer';
// Here Provider is a component

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer />
        <HooksCakeContainer /> */}
        <IceCreamContainer />
        <CommentsContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
