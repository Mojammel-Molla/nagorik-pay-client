import Image from 'next/image';
import { NAV_LINKS } from './../constants/index';
import Link from 'next/link';

const Navbar = () => {
  console.log(NAV_LINKS);
  return (
    <nav className="h-10 flex justify-between max-w-7xl mx-auto pt-5">
      <div>
        <Image src="/logos.png" width="240" height="230" alt="Logo" />
      </div>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map(link => (
          <Link
            href={link.href}
            key={link.key}
            className="text-[#01296f]  cursor-pointer font-semibold  transition-all hover:font-extrabold hover:text-[#4153f1]"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
