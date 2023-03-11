import Contato from "../components/Contato";
import Download from "../components/Download";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import style from './App.module.scss'
import IlustrationHero from '../assets/img/illustration-hero.svg'


function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Header title='Um gerenciador de favoritos simples' subTitle='Uma interface limpa e simples para organizar seus sites favoritos. Abra uma nova guia do navegador e veja seus sites carregarem instantaneamente. Experimente Grátis.' src={IlustrationHero}/>
      <Main />
      <Download />
      <Faq />
      <Contato />
      <Footer />  
    </div>
  );
}

export default App;
