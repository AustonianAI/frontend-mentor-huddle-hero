import Logo from "./logo"

const Navbar = () => {
  return (
    <nav className="h-24 pt-10 -ml-40 md:-ml-20">
      <div className="justify-start items-start align-middle">
        <Logo />
      </div>
    </nav>
  )
}

export default Navbar
