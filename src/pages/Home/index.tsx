import s from './index.module.css'

const Home = () => {
  const helloworld: string = "Hello World!";

  return (
    <article className={s.container}>
        <h1 className={s.title}>{helloworld}</h1>
        <p>欢迎来到这个世界！</p>
    </article>
  )
}

export default Home