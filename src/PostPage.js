import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./context/DataContext";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  
  return (
   <motion.main 
      className="postPage"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
   >
      <article className="post-card glass-panel" style={{ padding: '2rem' }}>
        {post &&
          <>
             <h2 className="page-title" style={{ borderBottom: 'none', paddingBottom: 0, fontSize: '2.5rem' }}>{post.title}</h2>
             <p className="post-date" style={{ fontSize: '1rem', marginBottom: '2rem' }}>{post.datetime}</p>
             <p className="post-body" style={{ fontSize: '1.1rem', marginBottom: '3rem', whiteSpace: 'pre-wrap' }}>{post.body}</p>
             
             <div className="flex gap-4">
                 <Link to={`/edit/${post.id}`}>
                    <button className="btn-secondary btn-premium flex items-center gap-2">
                      <FaEdit /> Edit Post
                    </button>
                 </Link>
                 <button 
                    className="btn-danger btn-premium flex items-center gap-2"
                    onClick={() => handleDelete(post.id)}
                 >
                    <FaTrash /> Delete Post
                 </button>
             </div>
          </>
        }
        {!post &&
          <div className="text-center mt-8">
              <h2>Post Not Found</h2>
              <p className="status-message">Well, that's disappointing.</p>
              <Link to='/' className="btn-secondary flex items-center justify-center gap-2" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
                <FaHome /> Visit Homepage
              </Link>
          </div>
        }
      </article>
   </motion.main>
  );
}

export default PostPage;