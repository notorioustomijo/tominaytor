import ogaLaw from '../assets/oga-law.png';
import mindlist from '../assets/mindlist.png';

export default function ProjectsTwo() {
    return (
        <section className='projects-two'>
            <a href="https://ogalawya.netlify.app" className='project-link ogalaw' target="_blank">
                <div className='project-ogalaw'>
                    <div className='project-ogalaw_container'>
                        <div className='project-two_header'>
                            <h2>Oga Lawya - An AI Lawyer; but for the average Nigerian</h2>
                            <p className='subtext'>MARCH, 2025</p>
                        </div>
                        <div className="project-img_container">
                            <img src={ogaLaw} alt="Oga Lawya Project" className='project-two_image'/>
                        </div>
                        <p>I took learnings from the Taxo AI chatbot I built and came up with the 
                            idea to use an AI chatbot to provide legal info to the average Nigerian.
                            It's still a work in progress but it's live and things are getting interesting.
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://bit.ly/4j2PR1F" className='project-link mindlist' target="_blank">
                <div className='project-mindlist'>
                    <div className='project-mindlist_container'>
                        <div className="project-img_container">
                            <img src={mindlist} alt="Mindlist Project" className='project-two_image'/>
                        </div>
                        <div className='project-two_header'>
                            <h2>Trying to organize ideas for creatives with Mindlist</h2>
                            <p className='subtext'>AUGUST, 2024</p>
                        </div>
                        <p>
                            I write a lot of notes which, sometimes, go forgotten. I figured I 
                            could build an app that somehow organizes those notes and brings it back to me 
                            from time to time. Kinda got stuck after designing it. I'll pick it up if new ideas 
                            for tinkering ever stop coming.
                        </p>
                    </div>
                </div>
            </a>
        </section>
    )
}