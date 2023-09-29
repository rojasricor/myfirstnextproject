"use client";

import Link from "next/link";

function PostsCard({ post }) {
  return (
    <div className="bg-gray-950 p-10" key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h2>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button onClick={() => alert(post.id)}>Click</button>
    </div>
  );
}

export default PostsCard;
