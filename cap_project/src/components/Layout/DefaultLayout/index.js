import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" style={{ height: '100%', minHeight: '400px' }}>
        <Sidebar />

        <main className="container-fluid ms-3 pt-2 pb-4 px-3">{children}</main>
      </div>
    </>
  );
}

export default DefaultLayout;
