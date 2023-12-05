// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@draco/store";
import {useEffect} from "react";
import {fetchUser} from "@draco/domains/users";

export function App() {
  const dispatch = useDispatch<AppDispatch>()

  const user = useSelector((rootState: RootState) => rootState.user)

  useEffect(() => {
    console.log(user)
  }, [user]);

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div className="bg-red-500">
      Coucou

      { user.isAuthenticated ? (
        <div>Vous êtes connecté</div>
      ) : (
        <div>Fils de pute connectes toi</div>
      )}
    </div>
  );
}

export default App;
