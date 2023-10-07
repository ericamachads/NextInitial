import Head from "next/head";
const About = () => {
    return (
      <>
        <Head>
          <title>
              About
          </title>
          <meta name="keywords" content="ninjas"/>
        </Head>
        <div className='container'>
        <section className="coder">
      <h3>The Emergence of a Coder</h3>
        <p>
        During my academic adventures in both Brazil and Portugal, I stumbled upon the world of programming, specifically Python and R.        
        </p>
        <p>
        Although my first brush with programming was through these languages, my heart was captured by the enchanting realm of front-end development. I'll delve into this captivating journey in the following topic.        
        </p>
        <p>
        What began as a curiosity soon transformed into a passion. Coding became my creative outlet, a way to bring ideas to life, and a path to making a real impact.        
        </p>
      </section>

      <section className="teacher">
      <h3>Teaching the Future, Shaping Minds</h3>
        <p>
        In 2021, my journey took an exciting turn when I joined BYJU'S FutureSchool. It was here that I discovered the captivating world of front-end development. I found immense joy in teaching children and teenagers how to craft their own games, apps, websites, and chatbots. Through platforms like Code.org, MIT AppInventor, Codepen, Dialogflow, Firebase Google, Visual Studio Code, Tinkercad, and Teachablemachine, I empowered the next generation of creators.        
        </p>      
      </section>

      <section className="knowledge">
      <h3>The Quest for Mastery</h3>
        <p>
        Driven by an insatiable thirst for knowledge, I embarked on a quest to enhance my programming skills further. My journey led me to TypeScript, React, Next, and Angular. These technologies became my tools for turning ideas into immersive digital experiences.        
        </p>      
      </section>
      </div>
      </>
    );
  }
   
  export default About;