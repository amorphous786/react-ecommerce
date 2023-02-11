import { Container } from "react-bootstrap";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import './bootstrap.min.css';
import './index.css';

function App() {
  return (
      <div>
        <Header>

        </Header>
        <main className="py-3">
            <Container>
              <h1>

                  Daddy is here!
              </h1>
              <HomeScreen/>
            </Container>

          </main>

        <Footer></Footer>
      </div>
  );
}

export default App;
