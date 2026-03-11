import { useContext } from "react"
import DataContext from "./context/DataContext"
import { motion } from "framer-motion"
import { FaPaperPlane } from 'react-icons/fa'

const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext)
  
  return (
   <motion.main 
      className="NewPost glass-panel" style={{ padding: '2rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
   >
       <h2 className="page-title">Create New Post</h2>
       <form className="newPostForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Title</label>
          <input
             id="postTitle"
             className="input-premium"
             type="text"
             required
             value={postTitle}
             onChange={(e) => setPostTitle(e.target.value)}
             placeholder="Enter an engaging title..."
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="postBody">Content</label>
          <textarea
             id="postBody"
             className="input-premium"
             required
             value={postBody}
             onChange={(e) => setPostBody(e.target.value)}
             placeholder="What's on your mind?"
          />   
        </div>
        
        <button type="submit" className="btn-premium flex items-center gap-2 mt-4">
          <FaPaperPlane /> Publish Post
        </button>
       </form>
   </motion.main>
  )
}

export default NewPost