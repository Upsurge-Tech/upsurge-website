import React, { useState } from "react";
import { lion, john, mike, yz, asteway, mel, gedion, TG, feven, nahom , tigist} from "../assets/import";
import Cards from "./Cards";
import "./gradient.css";
import Modal from "./innerComponents/Modal";


const OurTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [personalName, setpersonName] = useState("");
  const [image, setimage] = useState({});
  const [description, setdescription] = useState("");

  const modalFunction = (name, image, description) => {
    setpersonName(name);
    setimage(image);
    setdescription(description);
    setShowModal(true);
  };

  const members = [
    {
      Name: "Mailaf Tewodros",
      image: mike,
      phrase:
        "Strategically leading business initiatives, guiding innovation and sustainable growth within the development team",
      description:
        "As a project manager and leader, my role extends beyond mere guidance and foresight. I also foster an environment of creativity and collaboration, encouraging the exchange of innovative ideas within our team of brilliant problem solvers. Together, we navigate the evolving landscape of challenges and opportunities, continuously adapting our strategies to achieve our shared vision.",
    },
    
      {
        Name: "Tigist Wondimneh",
        image: TG,
        phrase:
          "I am a dedicated software engineer from Addis Ababa University. My interests lie in problem-solving and machine learning.",
        description:
          "I am a dedicated software engineer from Addis Ababa University. My interests lie in problem-solving and machine learning. I am passionate about exploring the vast possibilities of machine learning and always open to learning and acquiring new knowledge. My goal is to further my skills and actively contribute to the ever-evolving field of technology as well as have a valuable impact in mysociety.",
      },
    {
      Name: "Yonatan Haile",
      image: yz,
      phrase:
        "Dual-tech wizard crafting user-centric experiences with front-end and back-end expertise, seamlessly.",
      description:
        "What is more exciting than solving a problem that doesn’t have existing solutions? I thrive on trying to solve them. I’m eager to apply my UI/UX and web development skills on such solutions.",
    },
    {
      Name: "Melakeselam Ytibarek",
      image: mel,
      phrase:
        "Boundary-breaking developer mastering front-end and back-end technologies, forging innovation with fluidity.",
      description:
        "I am a versatile developer adept at both frontend and backend technologies,familiar with both frontend and backend frameworks. Passionate about full-stack development, I thrive on creating cohesive, user-centric experiences by leveraging my comprehensive skill set and staying at the forefront of emerging technologies.",
    },
    {
      Name: "Gedion Tenkir",
      image: gedion,
      phrase:
        "A software engineer that is finding his feet in the world of coding. Knowledgeable in Data Structure and Algorithms",
      description:
        "A software engineer that is finding his feet in the world of coding. Knowledgeable in Data Structure and Algorithms and proficient in mobile development and backend development.",
    },  
    {
      Name: "Yohannes Dessie",
      image: john,
      phrase:
        "Tech enthusiast excelling in both front-end and back-end technologies, crafting seamless digital experiences.",
      description:
        "I am a full-stack developer with a specialization in backend technologies. I have the skills to build and maintain both the front-end and back-end of web applications. However, my passion lies in the back-end side of things, where I can use my knowledge of programming languages, databases, and web frameworks to create scalable and reliable software.",
    },
    
    {
      Name: "Asteway Mekonnen",
      image: asteway,
      phrase:
        "Passionately shaping visual narratives, guiding innovation in design for impactful creative outcomes.",
      description:
        "Dedicated to passionately shaping visual narratives, my role involves guiding innovation in design to achieve impactful creative outcomes. With an unwavering commitment to translating ideas into visually compelling stories, I take pride in delivering designs that resonate and inspire. Embracing a dynamic and ever-evolving design landscape, I look forward to the exciting journey of crafting visually stunning solutions",
    },
    {
      Name: "Feven Tolla",
      image: feven,
      phrase:
        "A software engineer that is finding his feet in the world of coding. Knowledgeable in Data Structure and Algorithms",
      description:
        "Full-stack developer and a senior software engineering student passionated about anything web and mobile development related. Node.js, react js(next js), MongoDB and flutter are my on to go tools to use and develop fine edge and interactive applications.",
    },
    {
      Name: "Tigist Zelalem",
      image: tigist,
      phrase:
        "A software engineer that is always looking for challenges. Fascinated by the world of development.",
      description:
        "Full-stack developer and a senior software engineering student passionated about anything web and mobile development related. Node.js, react js(next js), MongoDB and flutter are my on to go tools to use and develop fine edge and interactive applications.",
    },
    {
      Name: "Nahom xxxx",
      image: nahom, 
      phrase:
        "A software engineer who is navigating the complexities of the coding world and gaining experience.",
      description:
        "I'm a senior software engineering student with a passion for web and mobile development. I specialize in full-stack development and frequently use tools like Node.js, React.js (Next.js), MongoDB, and Flutter to create cutting-edge and interactive applications.",
    },
  ]; 

  return (
    <div id="team" className="md:mt-[120px] mt-[50px]">
      <h1 className="text-[40px] gradient-text font-bold text-center">
        Our Team
      </h1>
      <div class="flex min-h-screen items-center justify-center md:mt-[30px] mt-[30px]">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
          {
            members.map((element) => (
              <Cards key={element.Name} personName={element.Name} explanation={element.description} picture = {element.image} paragraph={element.phrase} onClick = {() => {
                modalFunction(element.Name,element.image, element.description)
              }}/>
            ))
          }
          {showModal && (
            <Modal
              name={personalName}
              description={description}
              cover={image}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
