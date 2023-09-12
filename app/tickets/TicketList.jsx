import Link from "next/link"

async function getTickets(){

    const res = await fetch(' https://tickets-backend-h3lm.onrender.com/tickets', {next: {revalidate: 0}})

    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()

    return(
        <>
            {
                tickets.map((ticket)=>(
                    <div key={ticket.id} className="card my-5">
                        <Link href={`/tickets/${ticket.id}`}>
                            <h3>{ticket.title}</h3>
                            <p>{ ticket.body && ticket.body.slice(0, 200)}...</p>
                            <div className={`pill ${ticket.priority}`}>
                                {ticket.priority} priority
                            </div>
                        </Link>
                    </div>
                ))
            }
            {/* if we don't have any tickets the following will be displayed*/}
            {
                tickets.length === 0 && (
                    <p className="text-center">Yay!! There are no open tickets</p>
                )
            }
        </>
    )
}
