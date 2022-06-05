import React from "react";
import './Development.css';


function WebApp() {
    return(
        <div className="WebApp">
            <div className="development_hero">
                <h1>Web App Development</h1>
                <div className="hero_text">We build modern web apps to help our clients solve their most complicated business challenges. Our solutions are productive, responsive, easy to maintain, and implement flawlessly across devices, browsers, and operating systems – your app can be everywhere your users are.</div>
            </div>
            
            <div className="technology">
                <div className="title">Technology stack for web development</div>
                <div className="highlight_text">Using proven tools and techniques, our developers make visiting your site a joy.</div>
                <div className="tech_stack">
                    <div className="stack">
                        <div className="element">
                            <div className="tech_title">Front-end</div>
                            <div>React / Angular / Javascript / TypeScript / HTML5 / CSS / SASS</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Frameworks</div>
                            <div>Next.js / Express.js / Laravel / Symfony 2</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Infrastructure</div>
                            <div>Nginx / AWS / Bitbucket / DigitalOcean</div>
                        </div>
                    </div>

                    <div className="stack">
                        <div className="element">
                            <div className="tech_title">Back-end</div>
                            <div>PHP / NodeJS</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Databases</div>
                            <div>Redis / MySQL / PostgreSQL / MongoDB / Elasticsearch</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <Contactform /> */}
        </div>
    );
};

export default WebApp;