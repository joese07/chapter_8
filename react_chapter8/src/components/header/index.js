import logo from "../../logo.svg";
function Index() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid ">
          <a className="navbar-brand mb-2" href="/">
            <img
              src={logo}
              alt=""
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />
            Challenge Chapter 8
          </a>
        </div>
      </nav>
    </>
  );
}

export default Index;
