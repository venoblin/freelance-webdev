import '../../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <section className='intro'>
        <h1>Your <span>Website</span>, Our <span>Expertise</span></h1>
        <p>Sub heading</p>
      </section>

      <section className='services'>
        <p>Services</p>
      </section>

      <section className='reviews'>
        <p>Reviews</p>
      </section>

      <section className='contact'>
        <p>Contact</p>
      </section>
    </div>
  )
}

export default Home