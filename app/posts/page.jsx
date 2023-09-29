import PostsCard from "components/PostsCard";
import "./Posts.css";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return data;
}

async function PostPage() {
  const posts = await loadPosts();

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostsCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostPage;
