import logo from './logo.svg';
import './App.css';
import {JButton} from './jButton';
import {Header} from './Header';
import { PageContent } from './PageContent';
import { AddonPack } from './AddonPack';
import flames_logo from './img/flames_logo.png'
import { AddonPackSingleton } from './AddonPackSingleton';

function App() {
  const flames_downloads = [
    {
      version:"1.20.1",
      link: "example1234"
    },
    {
      version:"1.20.30",
      link: "example12345"
    },
    {
      version:"1.20.0",
      link: "example12340"
    }
  ]
  
  return (
    <div className="App">
      <Header />
      <PageContent />
      <AddonPackSingleton name="Тринадцать Огней Bedrock" description={"Сборка с контентом из lp. Тринадцать Огней"} icon={flames_logo} guides={"Представь что тут инструкции"} downloads={flames_downloads}/>
    </div>
  );
}

export default App;
