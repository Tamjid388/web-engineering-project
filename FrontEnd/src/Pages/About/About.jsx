import React from "react";
import aboutImage from "../../assets/c1-3-1.jpg";
import about from "../../assets/about/about .webp";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const About = () => {
  const teamMembers = [
    {
      name: "Tamjid Ahmed",
      image: "/assets/team/tamjid.jpg",
      facebook: "https://facebook.com/tamjid.ahmed",
      github: "https://github.com/tamjidahmed",
    },
    {
      name: "Adnan Rony",
      image: "/assets/team/adnan.jpg",
      facebook: "https://facebook.com/adnan.rony",
      github: "https://github.com/adnanrony",
    },
    {
      name: "Sabrin Nahar",
      image: "/assets/team/sabrin.jpg",
      facebook: "https://facebook.com/sabrin.nahar",
      github: "https://github.com/sabrinnahar",
    },
    {
      name: "Ataur Rahman",
      image: "/assets/team/ataue.jpg",
      facebook: "https://facebook.com/ataue.rahman",
      github: "https://github.com/atauerahman",
    },
    {
      name: "Tanvir Imam",
      image: "/assets/team/tanvir.jpg",
      facebook: "https://facebook.com/tanvir.imam",
      github: "https://github.com/tanvirimam",
    },
  ];
  return (
    <div className="container mx-auto">
      <section
        className="flex flex-col md:flex-row
       items-center container mx-auto  p-6 gap-16"
      >
        {/* Left  */}
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Company</h2>
          <p className="text-gray-600">
            FitFlex is a forward-thinking e-commerce brand dedicated to
            delivering high-quality fitness gear and wellness products to help
            people live healthier lives. Our goal is to combine performance with
            style, ensuring every customer feels empowered on their journey. We
            believe that fitness is for everyone, and we strive to make our
            products accessible, durable, and innovative. From cutting-edge
            apparel to essential accessories, FitFlex is committed to supporting
            your lifestyle with passion and integrity. Join us as we build a
            community centered around health, motivation, and continuous
            improvement.
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

      <section className="my-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="card bg-gray-200  shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{member.name}</h2>

                <div className="card-actions text-3xl">
                  <FaFacebook />
                  <FaGithub />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
