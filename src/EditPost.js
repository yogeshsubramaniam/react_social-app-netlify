import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import { motion } from "framer-motion";
import { FaSave, FaHome } from "react-icons/fa";

const EditPost = () => {
    const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);

    return (
        <motion.main 
           className="EditPost glass-panel" style={{ padding: '2rem' }}
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.3 }}
        >
            {editTitle &&
             <>
               <h2 className="page-title">Edit Post</h2>
               <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="postTitle">Title</label>
                  <input
                    id="postTitle"
                    type="text"
                    className="input-premium"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="postBody">Content</label>
                  <textarea
                    id="postBody"
                    className="input-premium"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                  />    
                </div>
                
                <button 
                  type="submit" 
                  className="btn-premium mt-4"
                  onClick={() => handleEdit(post.id)}
                >
                  <FaSave /> Save Changes
                </button>
               </form> 
             </>
            }
            {!post &&
                <div className="text-center mt-8">
                    <h2>Post Not Found</h2>
                    <p className="status-message">Well, that's disappointing.</p>
                    <Link to='/' className="btn-secondary flex items-center justify-center gap-2" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', borderRadius: '8px' }}>
                        <FaHome /> Visit Homepage
                    </Link>
                </div>
            }
        </motion.main>
    )
}

export default EditPost;