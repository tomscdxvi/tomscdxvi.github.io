/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tommy Chiu",
  title: "Hey, I'm Tommy",
  subTitle: emoji(
    "Enthusiastic Software Engineer and Full Stack/Web Developer. Proficient in Java, JavaScript, TypeScript, Reactjs, and Nodejs along with some other libraries and frameworks!"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/tomscdxvi",
  linkedin: "https://www.linkedin.com/in/tomslete/",
  gmail: "txmmychiu@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "I research a variety of technologies for Software Engineering and Full Stack/Web Development, utilizing them to bring my creative ideas to life.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front-end web and mobile applications"
    ),
    emoji("⚡ Build Progressive Web Applications (PWA)"),
    emoji(
      "⚡ Integration of third party services such as Firebase/AWS/Heroku to deploy your web applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?dnexty=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    /*
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-"
    },
    */
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SQL/Dbs",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    /*
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-"
    },*/
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sheridan College",
      logo: require("./assets/images/sheridan-logo.png"),
      subHeader:
        "Advanced Diploma in Software Development and Network Engineering",
      duration: "January 2020 - December 2023",
      desc: "",
      descBullets: [
        "Founder of the Exercise Lifestyle Club with over 40+ members"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer, Intern",
      company: "Idea Theorem",
      companylogo: require("./assets/images/idea-theorem.png"),
      date: "May 2023 – August 2023",
      desc: "Full Stack Developer Intern for Idea Theorem, a web design/development agency",
      descBullets: [
        "Developed web pages to help finalize a project using HTML, CSS (SCSS), and JavaScript (jQuery) to meet client requirements.",
        "Built web applications and components to assist lead developers by using JavaScript and React.js (Next.js) to speed up the deployment process for testing.",
        "Developed back-end APIs using JavaScript and tested using Postman/Swagger to avoid higher-level issues in development."
      ]
    },
    {
      role: "UI Developer, Intern",
      company: "Nokia",
      companylogo: require("./assets/images/nokia-logo.png"),
      date: "September 2022 – April 2023",
      desc: "UI Developer Intern for Nokia's R&D team",
      descBullets: [
        "Developed web pages using React.js with Storybook to provide a detailed explanation of services and components that are provided.",
        "Updated existing React.js components to meet Nokia's latest requirements and standards.",
        "Configured automated tests using Cypress, Mocha, and Jest to ensure that the components were working as intended for users.",
        "Worked with Jenkins to automate builds and deployment by streamlining the process into a continuous integration pipeline."
      ]
    },
    {
      role: "Technical Support, Intern",
      company: "Sheridan College",
      companylogo: require("./assets/images/sheridan-logo.png"),
      date: "January 2022 – April 2022",
      desc: "Technical Support Intern for Sheridan College's career-related and job-related platform Sheridan Works!",
      descBullets: [
        "Developed static HTML pages for Sheridan Works! to incorporate a modern style and mobile responsiveness.",
        "Assisted employees and peers with technical issues.",
        "Cleaned data through excel and updated changes into the live environment.",
        "Tested new systems in Sheridan Works! to prevent issues from occurring in the live environment."
      ]
    },
    {
      role: "Software Engineer, Intern",
      company: "Divercity",
      companylogo: require("./assets/images/divercity-logo.png"),
      date: "June 2021 – January 2022",
      desc: "Software Engineer Intern at Divercity, a diversity and inclusion hiring platform",
      descBullets: [
        "Developed RESTful APIs using Node.js and Express.js to meet technical requirements set by the lead developers.",
        "Fixed bugs and tested endpoints for APIs using Postman to ensure data was being sent through as requested.",
        "Built front-end components using React.js and TailwindCSS.",
        "Planned and led development workshops for designers to allow them to stay up-to-date with our technology stack."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Some startups, companies, and personal projects that I worked on or was directly involved in.",
  projects: [
    {
      image: require("./assets/images/auxo-logo.png"),
      projectName: "Auxo",
      projectDesc: "Public Project on Github",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/tomscdxvi/auxo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bloomsie-logo.jpg"),
      projectName: "Bloomsie",
      projectDesc:
        "May 2023 - August 2023: Assisted in the development and production of Bloomsie during my time at Idea Theorem",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bloomsie.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    /*
    {
      image: require("./assets/images/sheridan-works.png"),
      projectName: "Sheridan Works!",
      projectDesc: "January 2022 - April 2022: Developed and designed new web pages for the Sheridan Works! platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    */
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "StellarBot",
      projectDesc: "Public Project on Github",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/tomscdxvi/stellarbot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Melos",
      projectDesc: "Public Project on Github",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/tomscdxvi/melos"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle: "Let's Chat!",
  // number: "",
  email_address: "txmmychiu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
