import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";


export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <div>
            <p><small>Currently open tickets</small></p>
          </div>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <div className="flex justify-end">
          <Link href='/tickets/create'>Create New Ticket</Link>
        </div>
        <TicketList />
      </Suspense>
    </main>
  )
}
