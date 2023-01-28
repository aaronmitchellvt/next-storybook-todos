import Link from "next/link";

export interface NavbarProps {
  isLoggedIn: boolean,
  isLoading:boolean
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, isLoading }) => {
  let inputs;
  if (isLoggedIn) {
    inputs = (<></>
      // <li className="ml-6 md:text-lg text-md">
      //   <button className="bg-gray-700 text-green-200 hover:text-green-300 hover:bg-gray-600 rounded p-2 font-bold">
      //     Sign Out
      //   </button>
      // </li>
    );
  }
  if (!isLoggedIn) {
    inputs = (
      <>
        <li className="ml-6 md:text-lg text-md">
          <button className="bg-gray-700 text-green-200 hover:text-green-300 hover:bg-gray-600 rounded p-2 font-bold">
            <Link href="/auth/sign-in">Sign In</Link>
          </button>
        </li>
        <li className="ml-6 md:text-lg text-md">
          <button className="bg-green-200 text-gray-800 hover:bg-green-100 hover:text-gray-900 rounded p-2 font-bold">
            <Link href="/auth/create-account">Create Account</Link>
          </button>
        </li>
      </>
    );
  }
  if(isLoading) {
    inputs = <></>
  }
  return (
    <div className="w-full h-16 bg-gray-800 shadow">
      <div className="flex items-center justify-between py-4 px-10">
        <div className="text-green-300 font-bold text-xl flex items-center">
          //TODOS
        </div>
          <ul className="text-white flex items-center">{inputs}</ul>
      </div>
    </div>
  );
};

export default Navbar;
