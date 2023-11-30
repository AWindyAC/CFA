function Navbar() {
    const activeButton = () => {
      let dropdown = document.getElementsByClassName("dropdown-content");
      if(dropdown.classList !== "active"){ dropdown.classList.add('active')}
    }
    return (
      <div>
          <h1 className="store-name"><a className='text-decoration-none' href="/">CFA Oviedo/North UCF</a></h1>
          <ul className="nav-ul">
              <li><a href="/">Home</a></li>
              <li>
                <div>
                  <button className='navButton' onClick={activeButton}>About Us</button>
                  <div className="dropdown-content">
                  <a href="/about">Meet the Operators</a>
                  <a href="/meet-the-team">Meet the Team</a>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <button>Training</button>
                  <div className="dropdown-content">
                    <a href="/path-for-growth">Path for Growth</a>
                    <a href="https://www.pathway.cfahome.com/" target="_blank">Pathway</a>
                  </div>
                </div>
              </li>
              {/* <li><a href="/">Leadership</a></li>
              <li style={{display:"hidden"}}><a href="/events">Events</a></li> */}
              <li>
                <div>
                  <button>Food Safety</button>
                  <div className="dropdown-content">
                    <a href="/">Food Safety Checklist</a>
                    <a href="https://chick-fil-a.compliancemetrix.com/rql/p/ahomevrestauranthomeactivator" target="_blank">SAFE/ERQA</a>
                  </div>
                </div>
              </li>
              <li><a href="/uniforms">Uniforms</a></li>
          </ul>
      </div>
    )
  }