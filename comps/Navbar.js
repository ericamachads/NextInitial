import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={200} height={200}/>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Another Page</Link>
    </nav>
);
}
 
export default Navbar;