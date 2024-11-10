import Link from "next/link";

export default function Home() {

  return (
    <main className={"p-10"}>
      <h1 className="text-3xl font-bold mb-3">CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-2/">Week 2 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-3/">Week 3 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-4/">Week 4 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-5/">Week 5 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-6/">Week 6 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-7/">Week 7 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-8/">Week 8 Assignment</Link></p>
      <p><Link className={"text-lg hover:underline hover:text-green-500"} href="./week-9/">Week 9 Assignment</Link></p>
    </main>
  );
}
