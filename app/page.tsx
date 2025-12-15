import Link from "next/link";


export default function Home() {
  return (
    <>
      Web Catalog For Sience
      <br/>
      <Link href={'/bolt'}>Bolt Page</Link>
    </>
  );
}
