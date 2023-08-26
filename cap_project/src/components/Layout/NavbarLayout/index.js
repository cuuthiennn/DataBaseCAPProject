import Header from '~/components/Layout/components/Header';

function NavbarLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container-fluid py-4">{children}</div>
    </>
  );
}

export default NavbarLayout;
