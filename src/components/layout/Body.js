import PersonalInfo from '../GeneralInfo'
import FormalEducation from '../Education'
import PersonalProjects from '../PersonalProjects'
import WorkExperience from '../WorkExperience'

export default function Body() {
    return (
        <div className='body'>
            <a id='top-anchor'></a>
            <PersonalInfo />
            <FormalEducation />
            <PersonalProjects />
            <WorkExperience />
        </div>
    )
}