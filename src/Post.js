import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Post = ({post}) => {
  return (
    <motion.article 
      className="post-card glass-panel"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className='post-date'>{post.datetime}</p>
      </Link>
      <p className='post-body'>
        {(post.body).length <= 150 ? post.body : `${(post.body).slice(0,150)}...`}
      </p>
    </motion.article>
  )
}

export default Post