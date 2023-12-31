'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateBlogForm() {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)

      const blog = { title, body}

      const res = await fetch('https://tickets-backend-h3lm.onrender.com/blogs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog)
      })

      if (res.status === 201){
        router.refresh()
        router.push('/')
      }

    }

    
  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label >
        <span>Title:</span>
        <input 
            required
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />
      </label>
      <label>
          <span>Body:</span>
          <textarea 
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
          />
      </label>
      <button
          className='btn-primary'
          disabled={isLoading}
      >
          {isLoading && <span>Adding...</span> }
          {!isLoading && <span>Add Blog</span> }
      </button>
    </form>
  )
}
