//import logo from './logo.svg';
import './App.css';
import './ResumeWebsiteHeader.js'
import { ResumeWebsiteHeader } from './ResumeWebsiteHeader.js';
import { HtmlHead } from './HtmlHead.js';

function App() {
  let logoPath = '%PUBLIC_URL%/logo192.png';
  let htmlHeadObj = new HtmlHead(
    'Julian DeVille',
    'Data Engineer'
  );
  let headerHtmlObj = new ResumeWebsiteHeader(
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
      {htmlHeadObj.makeHtmlHead()}
      {headerHtmlObj.makeHeader()}
      <img src={logoPath} alt='keeping the logo bc its cool'/>
    </>
  );
}

export default App;
