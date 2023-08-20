import Header from '~/components/Layout/components/Header';

function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid">{children}</div>
    </>
  );
}

export default NavbarLayout;
