import logo from '../images/logo-image.png'

export default function Header() {
  return (
    <header className='main-header'>
      <div className='title'>
        {/* <img src={logo} alt="Logo" /> */}
        <h1 className='logo'>Lassen's</h1>
      </div>
      <nav>
        <button className='btn'>Cart</button>
      </nav>
    </header>
  )
}


