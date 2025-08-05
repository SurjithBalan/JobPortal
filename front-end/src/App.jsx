import Routers from "./router/Routers";
import { Provider } from 'react-redux';
import store from './store/store';


const App = () => {

  return (
   <Provider store={store}>
      <Routers/>
    </Provider>
  );
};

export default App;
