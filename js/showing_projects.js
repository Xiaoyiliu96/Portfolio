const data = [
   
    { 
        title: "ATYPI 2019", 
        sub: "ATYPI Annual Type Conference Guide Design", 
        desc: "This project is a user guide designed for the ATYPI Annual Type Conference, an international event that brings together typographers, type designers, and graphic designers from around the world. Using the 2019 in-person conference as a reference, the guide organizes schedules, talks, and workshops into a clear and accessible layout that supports both first-time and returning attendees. The design emphasizes typographic hierarchy and readability through the use of Atlas and Helvetica, while a deep blue color palette establishes a calm, authoritative tone. Visual inspiration from <span style='font-style: italic;'> The Great Wave off Kanagawa </span> introduces a sense of rhythm and movement, reflecting the dynamic exchange of ideas within the global typographic community.", 
        img: 'url("images/project_images/atypi19.jpg")',
        software:"Software: Adobe InDesign",
        link: "atypi19.html"
    },

    { 
        title: "Maze Game", 
        sub: "Game Design and Development", 
        desc: "This is a maze game that tells the story of a 10-year-old girl who failed to commit suicide and became a persistent vegetative state. In the game, we can see what happened to the girl initially, and when the player wins, they can also see the girl's story.", 
        img: 'url("images/project_images/maze_game.jpg")',
        software:"Software: Unreal Engine",
        link: "maze_game.html"
    },

    { 
        title: "Covid-19 Poster", 
        sub: "3D Typography Poster Design", 
        desc: "This 3D typography poster series explores the impact of COVID-19 beyond human health, addressing its connection to environmental pollution and the shared need for clean air. Using photographed masks as physical objects transformed into three-dimensional typographic forms, the project visualizes the tension between protection and restriction. The concept reflects the idea that while masks protect against COVID-19, they do not shield humans—or the planet—from environmental damage. Through bold color contrasts, expressive type, and layered compositions, the work emphasizes that under COVID-19, not only humans, but animals and the environment are deeply affected.", 
        img: 'url("images/project_images/covid19_poster.jpg")',
        software:"Software: Adobe InDesign & Adobe Photoshop",
        link: "covid19_posters.html"
    },

    { 
        title: "Drill Jig Assembly", 
        sub: "CAD Blueprint", 
        desc: "This project demonstrated the effectiveness of using AutoCAD for designing complex assembly tools like drill jigs. The software's robust 2D and 3D modeling capabilities allowed for precise design and visualization, ensuring that the final product met all required specifications. The completed drill jig not only achieved its objectives of accuracy and durability but also proved to be a valuable tool in improving the efficiency of the drilling process.", 
        img: 'url("images/project_images/CAD.jpg")',
        software:"Software: AutoCAD",
        link: "cad_blueprints.html"
    }
    /*,

    { 
        title: "OP-ED", 
        sub: "Animation Project", 
        desc: "This GIF animation explores the rise of AI-generated media and the blurring line between humans and machines in news reporting. It begins with a female news reporter delivering a statement, then gradually transitions to show her as part-robot, and finally fully robotic. The transformation symbolizes how AI can increasingly shape, mimic, and even replace human voices in journalism, raising questions about authenticity, trust, and the future of news.", 
        img: 'url("images/project_images/op_ed_animation.gif")',
        software:"Software: Adobe Photoshop & Google PowerPoint",
        link: "https://docs.google.com/presentation/d/1EtfpYpQDQh5bsWt8w8PleQaQcUt8bpUC/edit?slide=id.p1#slide=id.p1"
    }*/

];

function switchTab(index) {
    const item = data[index];

    document.getElementById("main-title").innerText = item.title;
    document.getElementById("sub-title").innerText = item.sub;
    
    // UPDATE THIS LINE:
    document.getElementById("desc").innerHTML = item.desc; 

    document.getElementById("software").innerText = item.software;
    document.getElementById("main_bg").style.backgroundImage = item.img;

    document.getElementById("detail-btn").onclick = () => {
        window.open(item.link, "_blank");
    };

    document.querySelectorAll(".nav-item").forEach((el, i) => {
        el.classList.toggle("active", i === index);
    });
}


// load first project
switchTab(0);