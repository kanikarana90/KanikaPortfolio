import { link } from "fs";


export const gridItems = [
  {
    id: 1,
    title: "I am a Quick learner",
    description: "",
    className:
      "lg:col-span-3 lg:row-span-4 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible and can adapt in any environment",
    description: "",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "View my resume",
    description: "",
    className: "lg:col-span-3 lg:row-span-1 md:col-span-1 md:row-span-1",
    imgClassName: "h-20 w-20 mt-10 ml-5", 
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "resume.png",
    spareImg: "",
  }
];


import project1 from "../assets/Proj1.png"

export const projects = [
  {
    id: 1,
    title: "Multiple Disease Prediction WebApp",
    des: "It is a web applications which is able to detect there type of diseases diabetes,parkinsons and heart disease. In this I’ve used three machine learning models made in pythonat jupyter platform and the I integrated them in a website using flask library and made a beautiful hospital website. It also have authentication like signup and login and a chatbot for customer service.",
    img: "Proj1.png",
    iconLists: ["html.png", "css.png", "python.png", "ml.png", "js.png"],
    link: "https://github.com/kanikarana90/MultipleDiseasePredictionWebapp",
  },
  {
    id: 2,
    title: "Animated Website",
    des: "The animated website showcases captivating animations using cutting-edge GSAP technology. With seamless transitions and visually stunning effects, this site offers an engaging and immersive user experience, setting new standards for interactive web design.",
    img: "Proj2.png",
    iconLists: ["html.png", "css.png","js.png","gsap.svg"],
    link: "https://www.google.co.in/",
  },
  {
    id: 3,
    title: "Ecommerce Website",
    des: "The eCommerce website integrates backend and frontend functionalities, incorporating a secure payment gateway, robust authentication, and interactive user interface. Users can browse, purchase products, and enjoya personalized shopping experience, redefining the standard for online retail.",
    img: "Proj3.png",
    iconLists: ["/react.png","html.png", "css.png","js.png"],
    link: "https://www.google.co.in/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    des: "Recreated the Netflix website",
    img: "Proj4.png",
    iconLists: ["html.png", "css.png","js.png"],
    link: "https://www.google.co.in/",
  },
  {
    id: 5,
    title: "Edusity",
    des: "ELearning Platform",
    img: "Proj5.png",
    iconLists: ["/react.png","html.png", "css.png","js.png"],
    link: "https://www.google.co.in/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern at GO24Online",
    desc: "Worked remotely as a web developer for GO24Online for 6 months, contributing to the development of a web-based platform using React.js to enhance interactivity. During this experience, I gained valuable skills in remote collaboration, Agile development methodologies, and advanced proficiency in React.js and front-end web development.",
    className: "md:col-span-2",
    thumbnail: "FullLogo.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "www.google.com",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "www.google.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "www.google.com",
  },
];
