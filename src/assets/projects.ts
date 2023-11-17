const projectsList:({name: string, description: string, preview_image: string, technologies: string[], url: string, github: string })[] = [
    {
    name: "gedget-x", 
    description: "an e-commerce website for gadgets shopping, this site enables multiplatform shopping by also letting users browse products available on Jumia website. This project implements payment in test mode with paystack. this project also provides an admin interface which can be accessed through gadget-x.vercel.app/admin (password - \"testing\" email - \"admin@gmail.com\").", 
    
    preview_image: "https://res.cloudinary.com/lahri/image/upload/v1699483160/portfolio/wxulsmftloivaenyspeq.png", technologies: ["nodejs", "javascript", "mongodb", "redis", "cheerio", "css3", "react", ], 
    url: "https://gedget-x.vercel.app", 
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
},]

export default projectsList;