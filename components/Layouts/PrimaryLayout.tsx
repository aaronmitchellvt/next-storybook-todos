import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export interface PrimaryLayoutProps extends React.ComponentPropsWithoutRef<'div'> {}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        <Navbar isLoading={false} isLoggedIn={true} />
        <main className="flex flex-col h-screen justify-between">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
