import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">MenuCard</Link>
      <div className="flex gap-4">
        <Link href="/auth/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/auth/signup">
          <Button variant="primary">Sign Up</Button>
        </Link>
      </div>
    </nav>
  );
}
