import Link from "next/link";

export default function Home() {
  return (
    <>
    <Link href="/posts">Post page</Link>
    <Link href="/albums">Album page</Link>
    </>
  );
}
