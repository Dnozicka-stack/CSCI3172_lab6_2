import { Link } from 'react-router-dom'

function Header() {
  return (
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        <ul className="nav-list">
          <li><Link to="/" aria-label="Home page">Home</Link></li>
          <li><Link to="/about" aria-label="About page">About</Link></li>
          <li><Link to="/resume" aria-label="Resume page">Resume</Link></li>
          <li><Link to="/projects" aria-label="Projects page">Projects</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 