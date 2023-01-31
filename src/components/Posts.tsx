import usePosts from './usePosts';

function Posts() {
  const postsQuery = usePosts();

  const { isLoading, data: posts } = postsQuery;

  if (isLoading || !posts) return <p>Loading...</p>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
