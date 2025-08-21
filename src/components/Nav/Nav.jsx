
function Nav() {
  return(
    <nav className="bg-[#34495e] p-4 shadow-md">
      <ul className="list-none m-0 p-0 flex justify-center gap-8">
        <li className="m-0"><a href="#home" className="text-white no-underline py-2 px-4 rounded-sm hover:bg-white/10 transition-colors duration-300 ease-in-out">Home</a></li>
        <li className="m-0"><a href="#products" className="text-white no-underline py-2 px-4 rounded-sm hover:bg-white/10 transition-colors duration-300 ease-in-out">Products</a></li>
        <li className="m-0"><a href="#about" className="text-white no-underline py-2 px-4 rounded-sm hover:bg-white/10 transition-colors duration-300 ease-in-out">About</a></li>
        <li className="m-0"><a href="#contact" className="text-white no-underline py-2 px-4 rounded-sm hover:bg-white/10 transition-colors duration-300 ease-in-out">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav;