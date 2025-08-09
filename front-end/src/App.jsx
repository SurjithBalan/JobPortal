import { useEffect } from "react";
import Routers from "./router/Routers";
import { useSelector,useDispatch } from "react-redux";
import { fetchUser } from "./store/features/userSlice";

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
   useEffect(() => {
    if (!user) {
      console.log('Fetching user data...');
      dispatch(fetchUser()); 
    }
  }, [user, dispatch]);

  return (
    <>
      <Routers/>
    </>
  );
};

export default App;
