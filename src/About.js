import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.main 
      className="About glass-panel" style={{ padding: '2rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="page-title">About This App</h2>
      <div className="post-body">
        <p style={{ marginTop: "1rem" }}>
          Hi, I am Yogesh. Together let's learn to win.
        </p>
        <p style={{ marginTop: "1rem" }}>
          This social media application was built to demonstrate modern React capabilities combined with a premium, glassmorphism UI design.
        </p>
      </div>
    </motion.main>
  )
}

export default About