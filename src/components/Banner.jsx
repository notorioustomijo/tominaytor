import theSwitch from '../assets/the-switch.svg';
import profile from '../assets/image.jpeg';

export default function Banner() {
    return (
        <section className='banner'>
            <div className='banner-text'>
                <div className='banner-intro'>
                    <p>By day, I'm a product designer at</p>
                    <img src={theSwitch} alt="Interswitch" />
                </div>
                <p>By night, it's a whole other story...</p>
                <h1>I design, think, tinker and make products with AI</h1>
            </div>
            <img src={profile} alt="Tomi's avatar" className='profile-pic'/>
        </section>
    )
}