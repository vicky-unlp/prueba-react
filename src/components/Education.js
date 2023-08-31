import { Certifications } from "./education/Certifications";
import { Courses } from "./education/Courses";
import { Degrees } from "./education/Degrees";

export default function FormalEducation() {
    return (
        <div className="principal" id="complete-education">
            <div className='principal-title'>
                <img src='https://i.imgur.com/AgJEaK0.png' alt='Icon'></img>
                <h1 className='principal-title' id='edu'>Education</h1>
            </div>
            <Degrees />
            <Certifications />
            <Courses />
        </div>
    )
}