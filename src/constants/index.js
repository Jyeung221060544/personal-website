import project1 from "../assets/projects/p2.mp4";
import project2 from "../assets/projects/VRGame.png";
import project3 from "../assets/projects/Encoding.png";
import project4 from "../assets/projects/Japan.png";
import project5 from "../assets/projects/reddit.png";

export const HERO_CONTENT = `Hi there! My name is Jason Yeung and I am currently a Junior at Stony Brook University studying Computer Science. I’m passionate about software development, game design, and using technology to solve creative problems. I’ve worked on projects ranging from VR game prototypes to web applications and machine learning–powered games, and I’m always looking for new challenges to sharpen my skills. Outside of school and work, I enjoy exploring new tech projects, playing video games, and diving into programming challenges. I’m fluent in Mandarin and Fuzhounese, and I’m always eager to learn, collaborate, and grow.`;

export const ABOUT_TEXT = `I was born and raised in Queens, NY, and from an early age I was fascinated by how things worked, whether it be solving puzzles, tinkering with computers, or experimenting with little coding projects. That curiosity only grew during high school, where I joined a Computer & Web Design CTE program. Over the course of four years, I built projects ranging from an informational website about Japan to a motion and voice controlled fighting game powered by machine learning. Those experiences showed me how powerful programming can be for turning creative ideas into interactive, real-world applications.

The pivotal moment came when I developed my first VR game prototype. Using HTML, CSS, and JavaScript, I created an immersive hunting game where users explored a 3D environment and earned points by tracking moving animals. It was far from perfect, but it opened my eyes to the world of game development and the potential of software engineering. That experience solidified my decision to pursue Computer Science at Stony Brook University, where I am currently a Junior maintaining a 3.89 GPA.

Looking ahead, I’m excited to grow as a software engineer by exploring areas such as game development, web applications, and systems programming. My ultimate goal is to contribute to projects that combine creativity and technology to solve meaningful problems and build engaging user experiences.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Manager",
    company: "Hershey’s Ice Cream",
    description: `Leadership – Built leadership skills by supervising staff, delegating responsibilities, and training new employees to deliver consistent service.

Organization & Problem-Solving – Strengthened organizational ability by managing store operations such as opening/closing, cash register handling, and inventory tracking.

Communication – Enhanced communication skills through daily customer interactions, addressing concerns, and ensuring a welcoming experience.

Adaptability & Decision-Making – Learned to stay calm under pressure and make quick, effective decisions while handling peak business hours.
`,
    technologies: ["Leadership", "Organization", "Problem-Solving", "Communication", "Decision-Making", "Teamwork"],
    link: "https://www.hersheysicecreamofcopiague.com/",
  },
  {
    year: "2023 - 2024",
    role: "Tutor/Event Assistant",
    company: "Mind Sound Music School ",
    description: `Teaching – Strengthened instructional skills by tutoring a foreign Chinese student in reading and writing, focusing on literacy and comprehension.

Adaptability – Learned to adapt teaching methods to different learning styles, helping students build confidence and understanding.

Event Coordination – Gained organizational skills by helping set up stages, preparing materials, and assisting with concert logistics.

Supervision & Responsibility – Built leadership experience by overseeing students during events to ensure safety and smooth participation.

Team Collaboration – Worked closely with staff and performers, developing teamwork and flexibility in a fast-moving environment.
`,
    technologies: ["Teaching", "Adaptability", "Event Coordination", "Responsibility", "Collaboration"],
    link: "https://mindsoundschool.com/",
  },
  {
    year: "2022 - 2023",
    role: "Tutor/Teacher",
    company: "Ai Plus Learning Center ",
    description: `Instructional Skills – Taught students from Kindergarten through 7th grade in core subjects such as Math, Reading, Writing, Science, and History.

Adaptability – Learned to adjust lesson plans and explanations to meet the needs of students at different grade levels and skill sets.

Test Preparation – Helped students prepare for state exams and standardized tests, including the SAT, improving their performance and confidence.

Communication – Strengthened ability to explain complex concepts in simple terms and keep students engaged in learning.

Mentorship – Guided students not only toward better grades but also toward readiness for the next grade level, fostering long-term academic growth.
`,
    technologies: ["Instructional Skills", "Adaptability", "Test Preparation", "Communication", "Mentorship"],
    link: "https://share.google/MxD2if7QlODADmeKO",
  },
];

export const PROJECTS = [
  {
    id: "reddit",
    title: "Reddit Replica",
    description: `For my Fundamentals of Software Development class, I built Phreddit, a Reddit clone using Node.js/Express, React, and MongoDB/Mongoose. I designed the data models such as users, communities, posts, and threaded comments, implemented secure authentication with bcrypt, and wrote REST APIs with validation, error handling, and role-based access. This project taught me how to work with complex databases and how to connect the front- and back-end development of a webpage. 

Once I had completed the project, I took things one step further and learned how to deploy a working copy of my project that I can maintain. I used Vercel to deploy my frontend, client interface of my website, then used Render and MongoDB Atlas for deploying my database and API. Overall, this project was a great simulation of some real-world experience in web-development`,
    mediaType: "image",
    mediaSrc: project5,
    technologies: ["Node.js/Express", "MongoDB/Mongoose", "React", "Auth & Security", "Database", "Deployment & Ops"],
    link: "https://reddit-replica-liard.vercel.app/",
  },
  {
    id: "stress-dueling",
    title: "Gaming Project: Stress Dueling",
    description: `During my High School years, I took on a gaming project from my CTE Program that incorprated machine learning with front-end web technologies. This project introduced me to how machines can collect real-world input data and use it to make responsive decisions in a game environment.
    
    I collaborated closely with a partner, which taught me the importance of clear communication, writing modular code, and version control practices for smoother collaboration. Using HTML, CSS, and JavaScript, we built the game interface and mechanics, while integrating machine learning models to enable motion and voice-command controls.

    Through this experience, I strengthened my skills in multiple areas of software development. First, I learned how to integrate machine learning models for real-time input recognition, while applying JavaScript to build responsive game logic and event handling. Then, I also deepened my front-end development abilities by creating interactive interfaces with HTML and CSS. Finally, to collaborate effectively with my partner, I focused on writing modular, maintainable code that was easier to share and expand. Along the way, I refined my problem-solving and debugging skills by optimizing input recognition for minimal delay and smoother gameplay. This project ultimately gave me valuable hands-on experience in merging software development with machine learning while simulating real-world teamwork and project management.
    `,
    mediaType: "video",
    mediaSrc: project1,
    technologies: ["Machine Learning", "HTML", "JavaScript", "CSS", "Colaboration"],
    link: "https://github.com/Jyeung221060544/GamingProject",
  },
  {
    id: "hunting-game",
    title: "VrWorld Hunting Game",
    description: `For my VrWorld Hunting Game project, I created an interactive first-person experience using HTML, CSS, and JavaScript that challenged players to hunt 3D animal models within a limited time to earn points. I incorporated 3D animations to bring the environment and animals to life, while also coding the physics of bullet movement and shooting mechanics to make gameplay more realistic. To enhance the challenge, I programmed animals with randomized directional movement, simulating natural and unpredictable behavior in the game world. This project strengthened my understanding of game development fundamentals, from managing object interactions and collision detection to designing immersive environments. It also deepened my problem-solving and coding skills by requiring me to balance performance, realism, and playability within a browser-based application.`,
    mediaType: "image",
    mediaSrc: project2,
    technologies: ["3D animations", "VR", "Physics", "HTML", "JavaScript", "CSS"],
    link: "https://github.com/Jyeung221060544/VrWorld-Hunting-Game",
  },
  {
    id: "encoding-decoding-project",
    title: "Encoding-Decoding Project",
    description: `This project is a Java-based console application that demonstrates a multi-step custom encryption and decryption process. The program transforms user input through six distinct layers of encoding.
    
    The encryption sequence works as follows:
    1. Caesar Cipher – shifts each letter one place to the right in the alphabet.
    2. String Reversal – flips the order of the characters in the message.
    3. Alphabet Transformation – converts letters into their Hangul equivalents.
    4. ASCII Conversion – translates characters into their ASCII values.
    5. Half-Swap Manipulation – splits each ASCII value, moving the back half to the front.
    6. Final Reversal – reverses the entire sequence of numbers for the final encrypted output.

    Through this project, I gained experience working with string manipulation, character encoding, ASCII values, and loops in Java. I also strengthened my problem-solving and debugging skills by implementing each stage of encryption as its own logical step, ensuring that the transformations could be applied both forward (encryption) and backward (decryption).

    This project highlights my ability to combine algorithmic thinking with low-level character operations in Java to create a unique and layered encryption system.
    `,
    mediaType: "image",
    mediaSrc: project3,
    technologies: ["Java", "Algorithm Design", "Data Conversion", "Character Encoding"],
    link: "https://github.com/Jyeung221060544/Encoding-Decoding-Project",
  },
  {
    id: "japan-webpage",
    title: "Website on Japan",
    description: `For this project, I designed and developed a fully functional informational website about Japan using HTML, CSS, and JavaScript. The site featured multiple pages, formatted content sections, embedded images and videos, and interactive elements to improve navigation and user experience.

    What I really liked about the project was creating the Japanese flag entirely with HTML and CSS by using styled <div> containers and demonstrating my ability to leverage core CSS properties like border-radius, background-color, and layout positioning to replicate real-world designs.

    Through this project, I strengthened my skills in responsive web design, semantic HTML structure and CSS styling, while also learning how to bring together multimedia and design to communicate cultural information effectively.
    `,
    mediaType: "image",
    mediaSrc: project4,
    technologies: ["HTML", "CSS", "Responsive Web Design", "Multimedia Integration"],
    link: "https://jyeung221060544.github.io/CountryWebsiteProject/info.html",
  },
];

export const CONTACT = {
  phoneNo: "+1 (347) 633-7106",
  email: "jason1213yeung@gmail.com",
};

export const EDUCATION = {
  gpa: `GPA: 3.89`,
  date: `September 2023 - Present`,
  about: `I am a Computer Science major at Stony Brook University (Class of 2027), maintaining a 3.89 GPA. My coursework covers areas such as algorithms, data structures, computer networks, and software development, with strong programming skills in Python, Java, JavaScript, C/C++, and SQL. Beyond academics, I’ve applied my technical knowledge through projects in VR game development, web applications, and machine learning.`,
};
