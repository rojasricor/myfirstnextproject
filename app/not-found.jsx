import Link from "next/link";

export const metadata = {
  title: "Page not found - Richxrx page",
};

function NotFound() {
  return (
    <div>
      <h1>404</h1>

      <p>Page not found</p>

      <Link href="/">Go to home</Link>
    </div>
  );
}

export default NotFound;
