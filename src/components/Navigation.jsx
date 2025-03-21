import logo from '../assets/tominaytor-logo.svg';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="#about-me">ABOUT</a></li>
                <li><a href="/"><img src={logo} alt="logo" className='logo'/></a></li>
                <li><a href="mailto:joshua.tomi1@gmail.com?Subject=Hi Tomi" target="_blank">EMAIL</a></li>
            </ul>
        </nav>
    )
};