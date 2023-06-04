import salma  from '../../img/img1.jpg'

const About = () => {
    return (

      
        <div id="About">
            <div  className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="hight-70"
    src={salma} 
    className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-4xl">Salma Akter</h1>
      <p className="py-6">I have studied computer science and Engineering from Daffodil international University. I always love to explore
and learn new things. I believe that learning comes from the inner self I am a quick self-learner. I am deeply
determined to struggle against the wide range of job competition by demonstrating my own ability. I want to
establish my capability and will try to inspire others to explore their ability and creativity.
</p>

<h4 className='font-bold'>Email:salmajahanerin@gmail.com</h4>
    </div>
  </div>
</div>
        </div>
    );
};

export default About ;