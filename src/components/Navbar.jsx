const Navbar = () => {
  return (

<div className="navbar bg-[#15803D] text-white shadow-sm px-8">
  <div className="navbar-start">
    <div className="dropdown">
       <div tabindex="0" role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div> 
      <ul
          className="menu menu-sm dropdown-content bg-green-800 text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>About</a></li>
        <li><a>Gallery</a></li>
        <li><a>Plant a Tree</a></li>
      </ul>
    </div>
    <img className="invert h-10" src="/src/assets/logo.png" alt="logo" />
    <a className="btn btn-ghost text-2xl">Green Earth</a>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>About</a></li>
        <li><a>Gallery</a></li>
        <li><a>Plant a Tree</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn rounded-full bg-[#FACC15] hover:bg-amber-400 text-[#15803D] border-0 active:scale-95">Plant a Tree</button>
  </div>
</div>

  );
};

export default Navbar;