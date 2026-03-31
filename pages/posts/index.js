import AllPosts from '../../components/posts/all-posts';
import { posts } from '../index';
const AllPage = () => {
  return <AllPosts posts={posts} />;
};

export default AllPage;
