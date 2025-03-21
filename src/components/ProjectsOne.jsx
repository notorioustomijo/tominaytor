import taxo from '../assets/taxo.png';
import qt from '../assets/qt.png';

export default function ProjectsOne() {
    return (
        <section className='projects-one'>
            <a href="https://taxo-ai.netlify.app" className='project-link taxo' target="_blank">
                <div className='project-one_content'>
                    <div className='project-one_text'>
                        <div className='project-one_header'>
                            <h2>Taxo — Explaining Tax Bills since 2025</h2>
                            <p className='subtext'>MARCH, 2025</p>
                        </div>
                        <p>
                            I saw a chatbot by PublicaAI that was supposed to
                            explain the Nigerian tax bill 2024 but it wasn't. So 
                            I made it better.
                        </p>
                    </div>
                    <div className='project-img_container'>
                        <img src={taxo} alt="Taxo AI project" />
                    </div>
                </div>
            </a>
            <a href="http://bit.ly/4iooijl" className='project-link qt' target="_blank">
                <div className='project-one_content'>
                    <div className='project-one_text'>
                        <div className='project-one_header'>
                            <h2>Quickteller Redesign</h2>
                            <p className='subtext'>SEPTEMBER 2022 - PRESENT</p>
                        </div>
                        <p>
                            I've been a member of the team responsible for the Redesign
                            of the Quickteller, Interswitch's flagship consumer product 
                            for the past few years.
                        </p>
                    </div>
                    <div className='project-img_container'>
                        <img src={qt} alt="Quickteller Project" />
                    </div>
                </div>
            </a>
        </section>
    )
}

