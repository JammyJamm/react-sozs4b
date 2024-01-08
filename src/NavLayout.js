import { Link, Outlet } from "react-router-dom";

const NavLayout = () => {
    return (
      <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/">Home</Link></li>
       
        <li class="nav-item">
        <Link to="/player">Player</Link> 
            </li>
        
      </ul>
    </div>
  </div>
</nav>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/player">Player</Link>
            </li>
          </ul>
        </nav> */}
  
        <Outlet />
      </>
    )
  };
  
  export default NavLayout;