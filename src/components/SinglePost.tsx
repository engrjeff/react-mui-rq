import { useSinglePost } from './usePosts';

function SinglePost() {
  const { isLoading, data: post } = useSinglePost('3');

  if (isLoading) return <p>Loading....</p>;

  return (
    <div>
      <h2>SinglePost</h2>
      <div style={{ border: '1px solid #eee', padding: 16, height: 200 }}>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </div>
    </div>
  );
}

export default SinglePost;
