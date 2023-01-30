import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import supabase from "../../lib/supabase";
import { useQuery } from "react-query";
import SignInOrCreateAccount from "../SignInOrCreateAccount/SignInOrCreateAccount";

export interface PrimaryLayoutProps
  extends React.ComponentPropsWithoutRef<"div"> {}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({ children }) => {
  //Get the user from the session, if there is no user then null is returned
  const fetchUser = async () => {
    const { data } = await supabase.auth.getUser();
    return data;
  };
  //Call fetchUser and "wrap" the promise using react query to drive the UI
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });
  const isLoggedIn = data?.user !== null && !isLoading && !isError;

  //What you see in the browser
  let pageContent: React.ReactNode = <></>;
  if (isLoading) {
    pageContent = <h1 className="text-2xl text-white">Loading..</h1>;
  } else if (!isLoggedIn) {
    pageContent = (
      <>
        <SignInOrCreateAccount />
      </>
    );
  } else if (isLoggedIn) {
    pageContent = children;
  }

  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        <Navbar />
        <main className="flex flex-col h-screen justify-between bg-gray-400">
          {pageContent}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
