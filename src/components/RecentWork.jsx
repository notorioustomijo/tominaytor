import recentWork from '../assets/recent-work.svg';

export default function RecentWork() {
    return (
        <section className='recent-work'>
            <img src={recentWork} alt="Recent Work" />
            <div className='ancillary-links'>
                <a href="https://www.linkedin.com/in/tominaytor">LINKEDIN</a>
                <a href="https://docs.google.com/document/d/14a3FnvMzWEm_kkirz-7Eo04yR6Jv9pFG/edit?usp=sharing&ouid=106769667411343784064&rtpof=true&sd=true">RESUME</a>
                <a href="https://www.github.com/notorioustomijo">GITHUB</a>
            </div>
        </section>
    )
}