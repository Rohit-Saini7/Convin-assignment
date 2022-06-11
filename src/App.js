import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Titlebar from "./components/Titlebar";
import Usercard from "./components/Usercard";
import Buttons from "./components/Buttons";
import { getUsersList } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="appWrapper">
      <Titlebar />
      <Usercard />
      <Buttons />
    </div>
  );
}

export default App;
