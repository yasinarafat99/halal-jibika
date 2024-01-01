import './Header.css'

function Header() {
  return (
    <>
        <nav>
         <div className="logo">
            Brand
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" className="menu-btn">
         <i className="fas fa-bars"></i>
         </label>
         <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
         </ul>
      </nav>
    </>
  )
}

export default Header;