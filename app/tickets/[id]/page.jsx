import { notFound } from 'next/navigation'
// we need to make the details page static for faster user experience. How do we do that?
// we fetch all the tickets and let next be aware of all the ids so as to make the static pages available before they're fetched
// we will use the function below to achieve that

export async function generateStaticParams(){
  const res = await fetch('http://localhost:3000/tickets')

  const tickets = await res.json()

  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id){


  const res = await fetch(`http://localhost:3000/tickets/${id}`, {next: { revalidate: 60}})

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}
