import '../../styles/Home.css'
import introImage from '../../images/intro-image.png'

const Home = () => {
  return (
    <div className='home'>
      <section className='intro'>
        <h1>Your <span>Website</span>, Our <span>Expertise</span></h1>
        <p className='sub-heading'>Elevate your online presence with an appealing website.</p>

        <div className='image'>
        <img src={introImage} alt='Code editor' />
        </div>
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