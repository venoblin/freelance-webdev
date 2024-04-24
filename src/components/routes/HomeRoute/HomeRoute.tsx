import './HomeRoute.css'
import introImage from '../../../images/intro-image.png'

const HomeRoute = () => {
  return (
    <div className='home'>
      <section className='intro'>
        <h1>Your <span>Website</span>, Our <span>Expertise</span></h1>
        <p className='sub-heading'>Elevate your online presence with an appealing website.</p>
        <img src={introImage} alt='Code editor' />
      </section>

      <section className='services white'>
        <p>Services</p>
      </section>

      <section className='contact'>
        <p>Contact</p>
      </section>
    </div>
  )
}

export default HomeRoute