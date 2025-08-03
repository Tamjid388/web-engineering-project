
import React from 'react'
import aboutImage from '../../assets/c1-3-1.jpg';
import about from '../../assets/about/about .webp';
import sabrin from '../../assets/profile/sabrin.jpeg';
import tamjid from '../../assets/profile/tamjid.jpg';
import saman from '../../assets/profile/saman.png';
import rony from '../../assets/profile/rony.jpeg';
import tiyash from '../../assets/profile/tiyash.jpg';
import { FaFacebook, FaGithub } from 'react-icons/fa';


export const About = () => {
  const teamMembers = [
    {
      name: "Tamjid Ahmed",

      image: tamjid,
      facebook: "https://www.facebook.com/tamjid.razin/",

      github: "https://github.com/tamjidahmed",
    },
    {
      name: "Adnan Rony",

      image: rony,
      facebook: "https://www.facebook.com/adnanrony19",
      github: "https://github.com/Adnan-Rony",
    },
    {
      name: "Sabrin Nahar",
      image: sabrin,
      facebook: "https://www.facebook.com/sabrin.nahar.3572",
      github: "https://github.com/SabrinJune",
    },
    {
      name: "Ataur Rahman",
      image: saman,
      facebook: "https://www.facebook.com/profile.php?id=100082755450923",
      github: "https://github.com/Ataur-Rahman-Samnan",
    },
    {
      name: "Tanvir Imam",
      image: tiyash,
      facebook: "https://www.facebook.com/tanvir.imam.tiyas",
      github: "https://github.com/tanvirimam",
    }
  ];
  return (
    <div>
      <section className="flex flex-col md:flex-row
       items-center  p-6 gap-16">
        {/* Left  */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Company
          </h2>
          <p className="text-gray-600">
            FitFlex is a forward-thinking e-commerce brand dedicated to delivering high-quality fitness gear and wellness products to help people live healthier lives. Our goal is to combine performance with style, ensuring every customer feels empowered on their journey. We believe that fitness is for everyone, and we strive to make our products accessible, durable, and innovative. From cutting-edge apparel to essential accessories, FitFlex is committed to supporting your lifestyle with passion and integrity. Join us as we build a community centered around health, motivation, and continuous improvement.
          </p>

        </div>

        {/* Right  */}
        <div className="md:w-1/2">
          <img
            src={about}
            alt="FitFlex Showcase"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

      <section className="my-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Our Team
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Meet the passionate minds behind FitFlex who drive our mission forward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden">
              <figure className="h-48 w-full border
         border-gray-200 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover 
            transition duration-300 ease-in-out transform hover:scale-105"
                />
              </figure>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                <div className="flex justify-center gap-4 text-2xl
           text-black">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

