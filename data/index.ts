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
    title: "",
    description: "",
    className: "lg:col-span-3 lg:row-span-1 md:col-span-1 md:row-span-1",
    imgClassName: "h-20 w-20 mt-10 ml-5",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center cursor-pointer underline text-blue-500",
    img: "resume.png",
    spareImg: "",
    // link: "/path-to-resume.pdf", // Specify the URL for the resume here
  },
];


import project1 from "../assets/Proj1.png"

export const projects = [
  {
    id: 1,
    title: "Multiple Disease Prediction WebApp",
    des: "Comprehensive healthcare platform with three machine learning models (heart,parkinsons and diabetes prediction) and chatbot.",
    img: "Proj1.png",
    iconLists: ["html.png", "css.png", "python.png", "ml.png", "js.png"],
    link: "https://github.com/kanikarana90/MultipleDiseasePredictionWebapp",
    previewLink: "https://drive.google.com/file/d/1SQ9pWxMc0TsjoNZFWr_DUw_IIDKr73IC/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Animated Website",
    des: "Captivating animations with seamless transitions and visually stunning effects.",
    img: "Proj2.png",
    iconLists: ["html.png", "css.png", "js.png", "gsap.svg"],
    link: "https://github.com/kanikarana90/AnimatedWebsite",
    previewLink: "https://drive.google.com/file/d/1nsmEkNh1uSUlPrH58rbXjlqGBaBd6867/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Ecommerce Website",
    des: "Secure online shopping experience with payment gateway and authentication.",
    img: "Proj3.png",
    iconLists: ["/react.png", "html.png", "css.png", "js.png"],
    link: "",
    previewLink: "https://drive.google.com/file/d/13nhB2lvdTjwai1t62NkHWNA7Ebp_Sttz/view?usp=drive_link",
  },
  {
    id: 4,
    title: "The Netflix clone",
    des: "Responsive interface with dynamic content and smooth navigation.",
    img: "Proj4.png",
    iconLists: ["html.png", "css.png", "js.png"],
    link: "https://github.com/kanikarana90/NetflixClone",
    previewLink: "https://drive.google.com/file/d/1ZOB_ae4Zq_Bkoxaze0R11gxtIslLCmDQ/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Edusity",
    des: " E-learning platform with React.js and email-based customer support.",
    img: "Proj5.png",
    iconLists: ["/react.png", "html.png", "css.png", "js.png"],
    link: "https://github.com/kanikarana90/Edusity",
    previewLink: "https://drive.google.com/file/d/18N0Z4IfmobLbs6DQwIGHeziv5dhe1sCZ/view?usp=drive_link",
  },
  {
    id: 6,
    title: "The Witch Run",
    des: "Obstacle-based action game built with HTML, CSS, and JavaScript.",
    img: "Proj6.png",
    iconLists: ["html.png", "css.png", "js.png"],
    link: "https://github.com/kanikarana90/TheWitchRun",
    previewLink: "https://drive.google.com/file/d/1D4zFVkB8H4quTQDY4DPICZhGvZ2b2MKA/view?usp=drive_link",
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
    link: "https://github.com/kanikarana90",
  },
  {
    id: 2,
    img: "/gmail.svg",
    link: "mailto:ranakanika044@gmail.com",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/kanika-rana-a19a7824b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 4,
    img: "/leet.svg",
    link: "https://leetcode.com/u/kanika_98/",
  },
  // {
  //   id: 5,
  //   img: "/podAI.svg",
  //   link: "www.google.com",
  // },
];
