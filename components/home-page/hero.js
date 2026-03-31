import classes from './hero.module.css';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sasha.jpg"
          alt="An image showing Sasha"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Sasha</h1>
      <p>This is my blog about web development</p>
    </section>
  );
};

export default Hero;
