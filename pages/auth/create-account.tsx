import Link from "next/link";
import PrimaryLayout from "../../components/Layouts/PrimaryLayout";
import { NextPageWithLayout } from '../page'

const CreateAccount: NextPageWithLayout = () => {

  const onCreateAccount = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("sign out clicked");
  }

  return (
    <div className="grid place-items-center mt-16 pt-8 px-3">
    <form 
      className="bg-white w-full sm:w-2/3 md:w-1/3 h-auto rounded mt-8 p-6"
      onSubmit={onCreateAccount}
    >
      <h1 className="text-black text-xl text-center font-bold pt-3">
        Create an account
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
          <p>Already have an account?</p>
          <Link href="/auth/sign-in">
            <p className="pl-2 text-green-700 hover:text-green-800 font-bold underline">
              Sign in
            </p>
          </Link>
        </span>
      </div>
    </form>
  </div>
  );
};

export default CreateAccount;

CreateAccount.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};