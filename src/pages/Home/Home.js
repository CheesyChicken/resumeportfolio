import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import AvatarLogo from '../../Images/avatar.png';
import '../Home/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>

        <div className='avatar'>
          <img src={AvatarLogo} alt='Avatar' className='avatar-logo' />
        </div>
      
        <h2>
          Hi, My name is Nishkarsh!
        </h2>
        
        <div className='prompt'>
          <p>
            A Software Developer with a passion for learning and creating.
          </p>
          <p>
            Sono sharingan, omae wa doko made mieteiru?
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
        
      </div>

      <div className='skills'>
        
        <h1>
          Skills
        </h1>
        
        <ol className='list'>
          
          <li className='item'>
            <h2>
              Front-End
            </h2>
            <span>
              ReactJS, Angular, Redux, HTML5, CSS3, react Native, Flutter, NPM, Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>

          <li className='item'>
            <h2>
              Back-End
            </h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, DynomoDB, DigitalOcean, MongoDB, AWS S3 
            </span>
          </li>

          <li className='item'>
            <h2>
              Languages
            </h2>
            <span>
              Javascript, Java, Python, C#, C, C++, Rust, Go, Typescript
            </span>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Home;