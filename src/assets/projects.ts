const projectsList:({name: string, description: string, preview_image: string, technologies: string[], url: string, github: string })[] = [
    {
    name: "gadget-x", 
    description: `an e-commerce website for gadgets shopping, this site enables multiplatform shopping by also letting users browse products available on Jumia website. 
    This project implements payment in test mode with paystack. this project also provides an admin interface which can be accessed through gadget-x.vercel.app/admin (password - \"testing\" email - \"admin@gmail.com\").`, 
    
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483160/portfolio/wxulsmftloivaenyspeq.png", technologies: ["nodejs", "javascript", "mongodb", "redis", "cheerio", "css3", "react", ], 
    url: "https://gadget-x.vercel.app", 
    github: "https://github.com/Horlarhyinka/gadget-x-api"
},
    {
    name: "Littlelemon", 
    description: "a restaurant website including features that enables users to browse availabl menu, view available tables for reservations and make reservations.", 
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483158/portfolio/q3jjr5nvt7lx23hcvvdb.png", technologies: ["python", "django", "sqlite", "drf", "css3"], 
    url: "https://littlelemon-y7q1.onrender.com/", 
    github: "https://github.com/Horlarhyinka/littlelemon0"
},
    {
    name: "expert", 
    description: "this is a backend project for a job search application which allows employers search for candidates with required skillsets, it includes the following features authentication, chatting, add/remove/update skillset.", 
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483157/portfolio/oeoe3tnxurru90dyluay.png", 
    technologies: ["nodejs", "typescript", "mongodb", "socket.io"], 
    url: "https://documenter.getpostman.com/view/20519100/2s93Xwyih3", 
    github: "https://github.com/Horlarhyinka/gadget-x-api"
},
    {
    name: "bug tracker", 
    description: "this is a backend project for a project management application that helps developers manage multiple projects as well as help them keep track of bugs and bugs status. project's features include jwt authentication, a daily reminder mail about unresolved bugs to registered email address, CRUD operation for projects and bugs.", 
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483157/portfolio/oeoe3tnxurru90dyluay.png", technologies: ["nodejs", "typescript", "mongodb", "node-cron", "JWT"], 
    url: "https://documenter.getpostman.com/view/20519100/2s93JzMLfS", 
    github: "https://github.com/Horlarhyinka/bug-tracker"
},{
    name: "blogy",
    description: "Blogy Microservices API is a cutting-edge Node.js project designed for building a scalable and modular blog platform. Leveraging a microservices architecture, this API consists of specialized services, including authentication, blog management, proxy routing, registry, email notifications, and newsletters. With over 4 years of experience in software engineering, I led the development of this project, emphasizing robustness, security, and flexibility. The microservices enable seamless communication, ensuring efficient and independent functionality. As a passionate learner, I continuously integrate emerging technologies, industry best practices, and diverse cultural perspectives, contributing to the project's adaptability and growth.",
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483157/portfolio/oeoe3tnxurru90dyluay.png", technologies: ["nodejs", "typescript", "mongodb", "rabbitmq", "microservice"], 
    url: "https://documenter.getpostman.com/view/20519100/2s9YsGhDUu", 
    github: "https://github.com/Horlarhyinka/blogy"
}
]

export default projectsList;
