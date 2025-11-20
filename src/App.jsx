import Site from './components/Site';
import Header from './components/Header';
import Conteudo from './components/Conteudo';
import Footer from './components/Footer';

export default function App() {
  return (
    <Site>
      <Header />
      <Conteudo />
      <Footer />
    </Site>
  );
}
