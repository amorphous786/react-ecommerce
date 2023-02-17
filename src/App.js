import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserEditScreen from './screens/UserEditScreen';
import UserListScreen from './screens/UserListScreen';
import './bootstrap.min.css';
import './index.css';

function App() {
  return (
      <Router>
        <Header>

        </Header>
        <main className="py-3">
           <Container>
            <Routes>
              <Route path="/register" element={<RegisterScreen/>}></Route>
              <Route path="/login" element={<LoginScreen/>}></Route>

              <Route path="/admin/userList" element={<UserListScreen/>}></Route>
              <Route path="/admin/user/:id/edit" element={<UserEditScreen/>}></Route>
              <Route path="/profile" element={<LoginScreen/>}></Route>

              <Route path='/' element={<HomeScreen/>} exact></Route>
              <Route path='/product/:id/' element={<ProductScreen/>}></Route>
              {/* <HomeScreen/> */}
            </Routes>
            </Container>

          </main>

        <Footer></Footer>
      </Router>
  );
}

export default App;
