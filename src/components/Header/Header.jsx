
const reactDescritions = ['fundamental', 'crucial', 'core'];
import reactImg from '../../assets/react-core-concepts.png';
import '../Header/Header.css'

function genRandomInt (max) {
  return Math.floor(Math.random() * (max + 1)) ;
}

export default function Header() {

    const descrption = reactDescritions[genRandomInt(2)]
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descrption} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }