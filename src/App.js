import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setUser } from "./features/auth/authSlice";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";

function App() {
  //console.log(process.env)

  /* const {isLoading} = useSelector(state => state.auth)
  console.log(isLoading) */

  const dispatch = useDispatch()
  useEffect(()=>{
   onAuthStateChanged(auth, (user) =>{
    if(user){
     dispatch(setUser(user.email))
    }
   })
  }, [])
  return (
    <>
    <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
