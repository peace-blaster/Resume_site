//import logo from './logo.svg';
import './App.css';
// components
import { Home } from './components/Home.js';
// css
import './css/header_style.css';
import './css/index.css';
import './css/home_page_style.css';

function App() {
  let logoPath = './logo.svg';
  let homePage = new Home(
    'Julian DeVille',
    'Data Engineer',
    ['Skills',
      'Sample Work',
      'Experience',
      'Contact',
      'Resume'
    ]
  );
  return (
    <>
      {homePage.body}
      <img src={logoPath} alt='keeping the logo bc its cool'/>
    </>
  );
}

export default App;
