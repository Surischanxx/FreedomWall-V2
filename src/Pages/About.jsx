import logo from '/src/assets/OurHIMITSU-removebg-preview.png'

const About = () => {
  return (
    <div className='h-full max-[742px]:px-5 flex items-center justify-center'>
      <div className='flex flex-wrap items-center'>
        <div className='flex-1'>
            <div>
              <h1 className='text-5xl mb-5 font-semibold'>
                Our<span className='text-[rgb(237,162,8)]'>HIMITSU</span>
              </h1>
              <h2></h2>
            </div>
            <p className='text-xl'>
            <span className='text-[rgb(237,162,8)]'>OurHimitsu</span> is a revolutionary online platform exclusively dedicated to our school community. With the essence of <span className='text-[rgb(237,162,8)]'>Himitsu</span >—meaning <span className='text-[rgb(237,162,8)]'>secret</span> in Japanese—deeply ingrained, our project offers a secure and confidential space for students to freely express their thoughts, ideas, and emotions. Through <span className='text-[rgb(237,162,8)]'>OurHimitsu,</span> we aim to create a vibrant digital community where students can connect, share experiences, and support one another. Embracing the power of anonymity, students can engage in authentic conversations without fear of judgment or prejudice. Our platform serves as a sanctuary, encouraging open dialogue and fostering personal growth. <span className='text-[rgb(237,162,8)]'>OurHimitsu</span> is more than just a digital space; it's a virtual haven where individuals can truly be themselves, exploring their identity and finding their voice. Join us on this transformative journey as we unlock the limitless potential of <span className='text-[rgb(237,162,8)]'>OurHimitsu</span> and nurture a community built on trust, understanding, and empowerment.
            </p>
        </div>
        <div className='flex items-center justify-center w-1/2 max-[742px]:hidden'>
          <img src={logo}/>
        </div>
      </div>
    </div>
  )
}

export default About