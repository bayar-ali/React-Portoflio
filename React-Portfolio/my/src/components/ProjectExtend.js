import React from "react";
import Project from "./Project";

class ProjectExtention extends React.Component {
    state = {
        projects: [
            {
                image: "images/images/hotresturant2.png",
                title: "Weather App",
                github: "https://github.com/bayar-ali/Weather-Dashboard",
                live: "https://bayar-ali.github.io/Weather-Dashboard/",
                description: ""
            },
            {
                image: "",
                title: "Covid-19 Tracker",
                github: "https://github.com/bayar-ali/Covid-19-Tracker",
                live: "",
                description: "."
            },
            {
                image: "",
                title: "My Cost Tracker",
                github: "https://github.com/bayar-ali/My-Cost-Track-Project-2-",
                live: "https://my-cost-tracker.herokuapp.com/login",
                description: "."
            },
            {
                image: "",
                title: "Burger App",
                github: "https://github.com/bayar-ali/burger-app",
                live: "https://drive.google.com/file/d/1nqkzhWqQdvEcrFnA3-YVVmYN0gYuXV-_/view",
                description: "."
            },
            {
                image: "",
                title: "Hot Restaurant",
                live: "https://hot-restaurant-101.herokuapp.com/home.html",
                description: "."
            },
  
        ]
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="project">
                        {this.state.projects.map((project, key) => (
                            <Project
                                image={project.image}
                                title={project.title}
                                github={project.github}
                                live={project.live}
                                description={project.description}
                                key={key} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectExtention;