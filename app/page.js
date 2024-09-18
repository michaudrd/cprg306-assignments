import Link from "next/link";

export default function Home() {

  return (
    <main className={"p-10"}>
      <h1 className="text-3xl font-bold mb-3">CPRG 306: Web Development 2 - Assignments</h1>
      <Link className={"text-lg hover:underline hover:text-green-500"} href="./week-2/">Week 2 Assignment</Link>
    </main>
  );
}
