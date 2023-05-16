import "./styles.css";

import { PostCard } from "../PostCard";

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        cover={post.cover}
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        // post={post}
      />
    ))}
  </div>
);
