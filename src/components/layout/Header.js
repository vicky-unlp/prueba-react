export default function Header() {
    return (
        <div className='header'>
            <div className='header-top'>
                <p className='my-description'>Developer - Data Analyst</p>
            </div>
            <div className='header-bottom'>
                <div className='bottom-description'>
                    <h1 className='my-name'>Victoria Gardella Ruiz</h1>
                </div>
                <div className='nav-bar'>
                    <a href='#top-anchor' alt='Personal' id='personal-link'>About Me</a>
                    <a href='#edu' alt='Education' id='edu-link'>Education</a>
                    <a href='#proj' alt='Projects' id='projects-link'>Projects</a>
                    <a href='#work' alt='Work Experience' id='work-link'>Work Experience</a>
                </div>
            </div>
        </div>
    );
}