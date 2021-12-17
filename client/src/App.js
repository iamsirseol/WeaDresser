import './styles/reset.css';
import LoadingIndicator from './components/Loading/LoadingIndicator'
import NavBar from "./components/NavBar/NavBar"
import OotdListPage from "./pages/OotdPage/OotdListPage"
import LandingPage from './pages/LandingPage/LandingPage';
import Modal from "./components/Modal/SignModal/Modal"
import MyPage from './pages/MyPage/MyPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecordPage from './pages/RecordPage/RecordPage';
import { useLoading } from './utils/useLoading'
require('dotenv').config();

function App() {
  const { tempLoading, logoutHandler } = useLoading();

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar logoutHandler={logoutHandler}/>
        {/* <UserInfo/> */}
        <Switch>
          <Route exact path = '/'><LandingPage /></Route>
          <Route path = '/mypage'><MyPage /></Route>
          <Route path = '/ootd-list'>{tempLoading ? <OotdListPage/> : <LoadingIndicator/>}</Route>
          <Route path = '/record'><RecordPage /></Route>
        </Switch>
        <Modal/>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;