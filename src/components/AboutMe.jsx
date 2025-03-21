import aboutMe from '../assets/about-me.svg';

export default function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <img src={aboutMe} alt="" className='about-header'/>
            <div className='about-me_text'>
                <h2>
                    My name's Tomi Joshua and I'm a former doctor 
                    turned product designer, tinkerer, and software
                    engineer.
                </h2>
                <div className='about-me_textcopy'>
                    <p>
                        I'm just a guy who started off 
                        as a doctor and then discovered he liked making things
                        that people like and enjoy using.
                    </p>
                    <p>
                        As for my process, that's simply "Find the next best things
                        to move the product development forward and do that. On repeat." ✌️
                    </p>
                </div>
                <div className='about-me_links'>
                    <h2>My Links</h2>
                    <div className='about-me_links-list'>
                        <a href="mailto:joshua.tomi1@gmail.com?Subject=Hi Tomi">EMAIL</a>
                        <a href="https://www.linkedin.com/in/tominaytor">LINKEDIN</a>
                        <a href="https://docs.google.com/document/d/14a3FnvMzWEm_kkirz-7Eo04yR6Jv9pFG/edit?usp=sharing&ouid=106769667411343784064&rtpof=true&sd=true">RESUME</a>
                        <a href="https://www.github.com/notorioustomijo">GITHUB</a>
                    </div>
                </div>
            </div>
        </section>
    )
}