import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Alysha Irvin
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
        <CustomLink to="/leadership">Leadership</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <a href="/Alysha_Irvin_CV.pdf" target="_blank">CV</a>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
