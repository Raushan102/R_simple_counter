import logo from '../assets/logo.png'

function Header(){


    console.log('header');
   return <div id='header-container'>
      <img src={logo} alt="Header_logo_image" />
      <h2>React- simple counter project</h2>
    </div>;

}

export default Header;