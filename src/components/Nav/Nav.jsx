
function Nav() {
  return(
    <nav>
      <ul className="list-none m-0 p-0 flex justify-center gap-8">
        <li className="m-0"><a href="#home" className="uppercase no-underline py-2 px-4 rounded-sm hover:text-black/60 transition-colors duration-300 ease-in-out">Home</a></li>
        <li className="m-0"><a href="#products" className="uppercase no-underline py-2 px-4 rounded-sm hover:text-black/60 transition-colors duration-300 ease-in-out">Products</a></li>
        <li className="m-0"><a href="#about" className="uppercase no-underline py-2 px-4 rounded-sm hover:text-black/60 transition-colors duration-300 ease-in-out">About</a></li>
        <li className="m-0"><a href="#contact" className="uppercase no-underline py-2 px-4 rounded-sm hover:text-black/60 transition-colors duration-300 ease-in-out">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav;