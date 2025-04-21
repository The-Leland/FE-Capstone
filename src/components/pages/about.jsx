


import React from 'react';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';
import '../../styles/pages/about-page.scss';
import logo from '../../assets/images/logo.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />

      <div className="about-content">
        <h1>ABOUT PAGE</h1>

        <section>
          <h2>PROCESS AND STRUGGLES OF THE CAPSTONE</h2>
          <p>
            I don’t know how to explain the process of my capstone. I guess it started out with me trying to get my file structure laid out properly then deciding what I wanted on each page. I then started making the .jsx pages and made sure they fit the criteria for the capstone. After that I don’t really remember how I did things. I started styling a little to get an idea of what the page would be. I worked hard on getting it all functioning the way it should and then I started styling again to get the layout the way I wanted it and getting the look the way I wanted it. It fought me every step of the way. I felt like John Goodman in Arachnophobia the way I was finding and crushing all the bugs that kept popping up. Every time I changed something another thing would break. I just kept making changes and tweaks and then next thing you know everything came together and I have a whole 40 minutes to spare. But all the troubleshooting and getting the functionality together and bug chasing took a few days. The first week and a half of this went good but then when things started to look like an actual site, that’s when all the things started happening. I got it working though.
          </p>
        </section>

        <div className="divider rust" />
        <div className="divider bronze" />

        <section>
          <h2>FAVORITE LANGUAGE</h2>
          <p>
            I know this is a bit of a copout for my answer, but I don’t have a favorite language yet. I do think they all have pros and cons and I don’t yet know all the languages, so I don’t think I can make that call at this time. Things I like about each language are:

            Python: I like the way this is just bare bones, in your face, my only purpose is to make things work way that this language does its thing. It’s just like, I’m here to get things going and that’s it.
            HTML and JavaScript: I like that these work together to make things work. They both do what they do, and when they come together, it’s just a great thing to see. They also let us do more and be more creative. I also like the limitations of these because you have to get crafty and make things do what you want within certain parameters and that makes things more fun.

            React: I like how this lets us just be so much more creative and is easier to work with. It can do so many things.
          </p>
        </section>

        <div className="divider rust" />
        <div className="divider bronze" />

        <section>
          <h2>SUMMARY, I GUESS...</h2>
          <p>
            So that was what I was able to do with the little amount of time I had left in the project. I used up all the time and it was all needed and then some. I had a blast even though this was a major struggle. I hope the end product is satisfactory. Have a great day and may the force be with you.
          </p>
        </section>

        <div className="logo-wrapper">
          <img src={logo} alt="Site Logo" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

