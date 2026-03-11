import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaHome } from "react-icons/fa"

const Missing = () => {
  return (
    <motion.main 
      className="Missing glass-panel text-center" style={{ padding: '3rem 2rem' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
       <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--text-main)' }}>404</h2>
       <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h3>
       <p className="status-message" style={{ marginBottom: '2rem' }}>Well, that's disappointing.</p>
       <Link to='/' className="btn-premium flex items-center justify-center gap-2" style={{ display: 'inline-flex', padding: '0.75rem 1.5rem', borderRadius: '8px', margin: '0 auto' }}>
          <FaHome /> Visit Our Homepage
       </Link>
    </motion.main>
  )
}

export default Missing