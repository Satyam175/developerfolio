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
  username: "Satyam Kaushik",
  title: "Hi all, I'm Satyam",
  subTitle: emoji(
    "A passionate Full Stack Developer specializing in Java, Spring, and React 🚀 currently working as a Software Engineer at MediaRadar."
  ),
  resumeLink: "path/to/your/updated/resume.pdf", // Make sure to update this with the actual path to your resume
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Satyam175",
  linkedin: "https://www.linkedin.com/in/satyam-kaushik-44b170191",
  gmail: "kaushiksatyam54@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/16520618/satyam-kaushik",
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER WHO EXPLORES EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop robust back-end systems using Java and Spring Boot"
    ),
    emoji(
      "⚡ Build and maintain responsive front-end applications using React"
    ),
    emoji(
      "⚡ Utilize various SQL and NoSQL databases for data storage and retrieval"
    ),
    emoji(
      "⚡ Implement DevOps practices using tools like Jenkins, Docker, and Kubernetes"
    ),
    emoji(
      "⚡ Integrate search functionalities with Elasticsearch and manage data with Apache Solr"
    ),
    emoji(
      "⚡ Solve complex data structures and algorithms problems"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "spring",
      fontAwesomeClassname: "fab fa-leaf",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-shipping-fast",
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fas fa-cogs",
    },
    {
      skillName: "elasticsearch",
      fontAwesomeClassname: "fas fa-search",
    },
    {
      skillName: "solr",
      fontAwesomeClassname: "fas fa-sun",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jabalpur Engineering College",
      logo: require("./assets/images/jecLogo.png"),
      subHeader: "Bachelor Of Technology",
      duration: "July 2018 - July 2022",
      desc: "CGPA - 8/10",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Peoples Public School",
      logo: require("./assets/images/pps.png"),
      subHeader: "Class 12",
      duration: "2016 - 2017",
      desc: "Percentage - 76.7%",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Front End",
      progressPercentage: "80%",
    },
    {
      Stack: "Programming",
      progressPercentage: "95%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "MediaRadar",
      companylogo: require("./assets/images/mediaradar.jpg"),
      date: "Feb 2023 - Present",
      desc: "Developed and maintained features for a web-based application using Java, Spring Boot, and React.",
      descBullets: [
        "Developed a scalable, high availability Creative Search web application that handled 3000+ concurrent users.",
        "Worked on seamless integration of Elasticsearch search engine and leveraging LLM capabilities effectively.",
        "Developed REST APIs and data ingestion pipelines and implemented authentication protocols using AWS Cognito and OAuth.",
        "Developed robust and scalable applications using core Java and Spring Boot. Collaborated closely with the Analytics Backend team to streamline data flow through Druid and Spark.",
      ],
    },
    {
      role: "Software Developer",
      company: "Urjanet",
      companylogo: require("./assets/images/urjanet.jpg"),
      date: "October 2021 – Feb 2023",
      desc: "Worked on data integration and management solutions.",
      descBullets: [
        "Developed and optimized data pipelines for efficient data ingestion and processing.",
        "Collaborated with cross-functional teams to ensure seamless integration with client systems.",
        "Developed a Utility Data platform that facilitates the processing of utility bill invoices, helping expense management and accounting departments streamline utility processing"
      ],
    },
    {
      role: "Data Science Intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/tsf.png"),
      date: "August 2021 – September 2021",
      desc: "Data Science and Machine Learning Intern",
      descBullets: [
        "Created data visualization graphics, translating complex data sets into comprehensive visual representations."
      ],
    }
  ],
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank Gold Badge in Java",
      subtitle:
        "Got Gold badge in java from HackerRank and passed HackerRank java test",
      image: require("./assets/images/hackerrank.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/kaushiksatyam573?badge=java&stars=5&level=3&hr_r=1&utm_campaign=social-buttons&utm_medium=linkedin&utm_source=badge_share_profile&social=linkedin://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
        },
       ],
    },
    {
      title: "IBM digital badge in Data Science",
      subtitle : "                                                    ",
      image: require("./assets/images/ibm.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.youracclaim.com/earner/earned/badge/af761daf-2ce8-4960-b571-df3527b222fe",
        },
      ],
    },

    {
      title: "Eleation Certified Ansys Designer",
      subtitle: "Completed Certifcation from Eleation for Ansys",
      image: require("./assets/images/eleation2.png"),
      footerLink: [
        { name: "Certification", 
        url: "" },
      
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
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

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6260680915",
  email_address: "kaushiksatyam54@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
