import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "./context/DataContext"

const Home = () => {
   const {searchResults, fetchError, isLoading} = useContext(DataContext)
   
  return (
    <main className="Home">
      <h1 className="page-title">Recent Feed</h1>
      {isLoading && <p className="status-message">Loading posts...</p>}
      {!isLoading && fetchError && <p className="status-message" style={{color:"#ef4444"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/> : <p className="status-message">No posts to display.</p>)}
    </main>
  )
}

export default Home