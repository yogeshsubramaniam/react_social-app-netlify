import Post from "./Post"

const Feed = ({posts}) => {
  return (
    <div className="post-section">
       {posts.map(post => (
           <Post key={post.id} post={post}/>
       ))}
    </div>
  )
}

export default Feed