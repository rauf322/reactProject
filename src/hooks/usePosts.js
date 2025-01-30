import { useMemo } from "react";


    // Search posts to display and we useMemo to avoid re-rendering
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
      }, [query, sortedPosts]);
    
    return sortedAndSearchPosts;
}

  // Sorted posts to display and we useMemo to avoid re-rendering
export const useSortedPosts = (posts, sort) => {
      const sortedPosts = useMemo(() => {
        console.log('Function getSortedPosts called');
        if (sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
      },[sort, posts]);

    return sortedPosts;
}

