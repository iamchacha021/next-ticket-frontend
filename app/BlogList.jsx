import Link from "next/link"

// export async function generateStaticParams(){
//     const res = await fetch('http://localhost:3000/blogs', {next: {revalidate: 300}})

//     const blogs = await res.json()

//     return blogs
// }

async function getBlogs(){
    const res = await fetch('http://localhost:3000/blogs', {next: {revalidate: 0}})

    return res.json()
}

export default async function BlogList() {
    const blogs = await getBlogs()

  return (
    <>
       
        {
            blogs.map((blog) => {

                return(
                    <div key={blog.id} className="card my-5">
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </div>
                )
            })
        }
        {/* if we don't have any blogs the following will be displayed*/}
        {
            blogs.length === 0 && (
                <p className="text-center">There are no available blogs at the moment 😓😓🥲🥲</p>
            )
        }
        
    </>
  )
}
