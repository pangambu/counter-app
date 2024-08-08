

//stateless Functional Components
const NavBar = ({ totalCounters }) => { 
    console.log("Navbar rendered");
    return (
        <nav className="navbar navbar-light lg-light">
            <a className="navbar-brand" href="https://github.com">
                NavBar {" "}
                 <span className="badge badge-pill badget-secondary">
                    {totalCounters}
                </span> 
                </a>
        </nav>
      );
};


 
//export default NavBar;
export default NavBar;