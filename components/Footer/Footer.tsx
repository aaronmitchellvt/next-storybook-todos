import Link from "next/link";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full h-16 bg-gray-800 shadow-md flex items-center px-4">
      <div className="bg-green-200 hover:green-100 hover:shadow-lg rounded-full m-3 p-3 h-8 w-8 flex justify-center items-center shadow">
        <Link href="https://github.com/aaronmitchellvt/your-next-hike">
          Git
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
