import Link from "next/link";
import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
import { NextPageWithLayout } from '../page'

const SignIn: NextPageWithLayout = () => {

  const onSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("sign in clicked");
  }

  return (
    <div className="grid place-items-center mt-16 pt-8">
    <form 
      className="bg-white w-full sm:w-2/3 md:w-1/3 h-auto rounded mt-8 p-6"
      onSubmit={onSignIn}
    >
      <h1 className="text-black text-xl text-center font-bold pt-3">
        Sign in
      </h1>
      <button
        className="p-2 mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white rounded"
        type="submit"
      >
        <span className="flex justify-between items-center pr-3">
          <p className="pl-3">Contine with Google</p>
        </span>
      </button>
      <div className="flex justify-center py-3">
        <span className="flex items-center">
          <p>Don't have an account?</p>
          <Link href="/auth/create-account">
            <p className="pl-2 text-green-700 hover:text-green-800 font-bold underline">
              Create account
            </p>
          </Link>
        </span>
      </div>
    </form>
  </div>
  );
};

export default SignIn;

SignIn.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};