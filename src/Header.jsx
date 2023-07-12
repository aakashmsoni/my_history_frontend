export function Header() {
  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/logo.jpeg"
              alt="Logo"
              width="100"
              height="77"
              className="d-inline-block align-text-right p-2"
            />
            MyHistory
          </a>
        </div>
      </nav>
    </header>
  );
}
