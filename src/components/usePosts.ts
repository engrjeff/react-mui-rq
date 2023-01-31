import { useQuery } from '@tanstack/react-query';
import { getPosts, getSinglePost } from './post-service';

export default function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    select(posts) {
      return posts.map((post) => {
        return {
          ...post,
          username: 'Javes',
        };
      });
    },
  });
}

export function useSinglePost(postId: string) {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getSinglePost(postId),
  });
}
