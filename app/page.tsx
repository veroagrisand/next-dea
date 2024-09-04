import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-slate-600 items-center">
      <Link className="px-2 py-2  hover:bg-slate-900" href="/">Home</Link>
      <Link className="px-2 py-2 bg-current hover:bg-slate-900" href="/posts" target="_blank">Post</Link>
      <Link className="px-2 py-2  hover:bg-slate-900" href="/albums" target="_blank">Albums</Link>
    </main>
  );
}
