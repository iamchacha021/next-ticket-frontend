import Link from "next/link";
// This custom error page will be inherited by all not found pages

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There was a problem</h2>
        <p>We could not find the page you were looking for</p>
        <p>Go to the <Link href='/'>Dashboard</Link></p>
    </main>
  )
}
