import React from "react";

function AboutMe() {
    return (
        <>
            <main className="container" id="AboutMe">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-md-12">
                        <img src="images/images/linkin picture.png" alt="Profile" className="img-fluid" />
                    </div>
                    <div className="col-lg-8 col-md-12 text-center">
                        <p> 
                         Programming has helped me strengthen and develop several characteristics which I believe are important to any successful person. 
                         The computer programming problems and challenges, constant learning,
                         and satisfaction that come from programming make me love the job I want to take.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" id="aboutme">
                        <a href="https://www.linkedin.com/in/bayar-ali-7aa8981a0/" target="_blank" className="left-margin"><i
                            className="fab fa-linkedin fa-3x"></i></a>
                        <a href="https://github.com/bayar-ali" target="_blank" className="left-margin"><i className="fab fa-github-square fa-3x"></i></a>
                        <a href="" target="_blank" className="left-margin"><i className="fas fa-file fa-3x"></i></a>
                    </div>
                </div>
            </main>
        </>
    )
};

export default AboutMe;