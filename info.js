let info = {
  name: "Amirul Rashideen",
  logo_name: "Myrul Deen",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am Muhammad Amirul Rashideen bin Zaidi, people call me Deen [Deno], currently pursuing my bachelor's degree majoring in Information Technology from Universiti Selangor. I am a tech enthusiast & an open-source lover. I am always open to collaborating on projects and innovative/disruptive ideas.",
  links: {
    linkedin: "https://www.linkedin.com/in/muhd-amirul-rashideen-zaidi-65682015a/",
    github: "https://github.com/myruldeen",
    resume: "https://drive.google.com/file/d/1exSnCRh-O1PAFCi9pynZsNdiZAg_OLmX/view?usp=share_link",
  },
  education: [
    {
      name: "UNISEL",
      place: "Bestari Jaya",
      date: "april, 2020 - present",
      degree: "Bachelor in Information Technology",
      gpa: "3.53/4.0",
      description:
        "",
      skills: [
        "Software Engineering",
        "Web Programming",
        "Object-oriented Programming"
      ]
    },
    {
      name: "UNISEL",
      place: "Bestari Jaya",
      date: "august, 2016 - september 2019",
      degree: "Diploma in Information Technology",
      gpa: "3.54/4.0",
      description:
        "",
      skills: [
        "HTML Programming",
        "Web Application Development",
        "Visual Programming"
      ]
    }
  ],
  experience: [
    {
      name: "Grab Haulier",
      place: "Subang Jaya",
      date: "1,sep, 2021 - 28,sep, 2021",
      position: "Node.js backend developer",
      description:
        "",
      skills: ["Node.js", "Docker", "JSON", "JavaScript", "Postman", "Swagger", "REST"]
    }
  ],
  skills: [
    {
      title: "Embedded Development",
      info: ["Arduino", "ESP8266/32", "Raspberry Pi"],
      icon: "fa fa-gear"
    },
    {
      title: "Language",
      info: [
        "Python","Javascript","TypeScript","C++"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3"],
      icon: "fa fa-cubes"
    },
    {
      title: "Web technologies",
      info: ["Vue", "React", "Angular"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    // {
    //   name: "Keep it Green",
    //   title: "UI/UX Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/Keep it green/cover.png"),
    //       title: "MoodBoard"
    //     },
    //     {
    //       img: require("./src/assets/designs/Keep it green/show.png"),
    //       title: "show"
    //     },
    //   ],
    //   technologies: ["Figma", "Photoshop"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "Jan, 2022",
    //   visit: "",
    //   description:
    //     ""
    // },
  ],
  portfolio: [
    {
      name: "Smart Agriculture & Data Analytics",
      pictures: [
        {
          img: require("./src/assets/portfolio/smart-agriculture/1.png")
        },
        {
          img: require("./src/assets/portfolio/smart-agriculture/2.png")
        }
      ],
      technologies: ["ionic", "angular", "node.js", "mongodb"],
      category: "Mobile App",
      date: "Aug, 2021 - 20 days",
      github: "https://github.com/myruldeen/smart-agriculture",
      visit: "",
      description:
        " Monitor soil temperature, humidity and moisture in real-time "
    },
    {
      name: "Mobile App Solar Monitoring",
      pictures: [
        {
          img: require("./src/assets/portfolio/solar-monitoring/1.png")
        },
        {
          img: require("./src/assets/portfolio/solar-monitoring/2.png")
        }
      ],
      technologies: ["ionic", "angular","node.js","mongodb"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "https://github.com/myruldeen/solar-monitoring",
      visit: "",
      description:
        "monitor solar dc voltage, current, ambient, temp and humidity in real-time"
    },
    {
      name: "Real-time Weather Monitoring",
      pictures: [
        {
          img: require("./src/assets/portfolio/weather-monitoring/1.png")
        },
        {
          img: require("./src/assets/portfolio/weather-monitoring/2.png")
        },
        {
          img: require("./src/assets/portfolio/weather-monitoring/3.jpg")
        }
      ],
      technologies: ["nodered", "grafana", "influxdb", "node.js", "docker"],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github: "",
      visit: "https://nodered.denoodev.com/ui",
      description:
        " Monitor weather using esp32 and mqtt to display current value in realtime using nodered and grafana. "
    },
  ],
};

export default info;
