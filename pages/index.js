import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
export const posts = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production – it makes building fullstack React apps easier.',
    date: '2026-02-10',
  },
  {
    slug: 'mastering-javascript',
    title: 'Mastering NextJS Routing',
    image: 'mastering-js-thumb.png',
    excerpt:
      'Learn how to use file-based routing and dynamic routes in NextJS to build powerful applications.',
    date: '2026-03-15',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'NextJS Data Fetching',
    image: 'getting-started-nextjs.png',
    excerpt:
      'Understand how to fetch data in NextJS using getStaticProps and getServerSideProps.',
    date: '2026-03-05',
  },
  {
    slug: 'mastering-javascript2',
    title: 'Deploying NextJS Apps',
    image: 'mastering-js-thumb.png',
    excerpt:
      'Learn how to deploy your NextJS applications to production using platforms like Vercel.',
    date: '2026-02-20',
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}
export default HomePage;
