import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/".concat(id)
  );
  const data = await res.json();
  return data;
}

async function Post({ params }) {
  const post = await loadPost(params.postId);

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <hr />

      <h3>More posts here...</h3>

      <Suspense fallback={<div>Loading posts...</div>}>
        <Posts />
      </Suspense>
    </section>
  );
}

export default Post;
