import Link from "next/link";

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full h-16 bg-gray-800 shadow">
      <div className="flex items-center justify-between py-4 px-10">
        <div className="text-green-300 font-bold text-xl flex items-center">
          //TODOS
        </div>
      </div>
    </div>
  );
};

export default Navbar;
