import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-100 h-16 flex justify-center items-center">
      <Link href={"/"} className="hover:text-black text-gray-600 transition">
        Home
      </Link>
    </div>
  );
};

export default Header;
