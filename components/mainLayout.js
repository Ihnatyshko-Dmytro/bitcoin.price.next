import Link from "next/link";

export function MainLayout( {children} ) {
  return (
    <>
      <div className="container">
        <header className="header">
          <nav className="header__links">
            <Link href="/">
              <a className="header__links__link">Home</a>
            </Link>
            <Link href="/tokens.price" className="header__links__link">
              <a className="header__links__link">Token Price</a>
            </Link>
          </nav>
        </header>
        <main className="main">{children}</main>
        <footer className="footer">Foter</footer>
      </div>
    </>
  );
}