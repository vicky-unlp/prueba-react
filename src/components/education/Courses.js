import { useState } from 'react';

export function Courses() {
    let courses = [{
        id: 0,
        title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        institution: 'IBM',
        date: 'July, 2023',
        img: 'https://coursera.org/share/f1372b1a346dd8d02972da78a1e46841',
        mini: 'https://i.imgur.com/nYYwxpI.jpg'
    }, {
        id: 1,
        title: 'Introduction to NoSQL Databases',
        institution: 'IBM',
        date: 'July, 2023',
        img: null,
        mini: null
    }, {
        id: 2,
        title: 'Introduction to Agile Development and Scrum',
        institution: 'IBM',
        date: 'April, 2023',
        img: 'https://coursera.org/share/2db6dca2ba7e683d979be265c7a21ae4',
        mini: 'https://i.imgur.com/N6Q3JND.jpg'
    }, {
        id: 3,
        title: 'Python from Zero to Master with Python 3',
        institution: 'Udemy',
        date: 'January, 2023',
        img: 'https://www.udemy.com/certificate/UC-3b79a6f9-89eb-4c9a-a485-214e54a9dc08/',
        mini: 'https://i.imgur.com/7QoXJYo.jpg'
    }, {
        id: 4,
        title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
        institution: 'Deeplearning.ai',
        date: 'July, 2022',
        img: 'https://coursera.org/share/8d523d29a4c716eb162eb5def899d9db',
        mini: 'https://i.imgur.com/JJSoWbx.jpg'
    }, {
        id: 5,
        title: 'Introduction to Git and GitHub',
        institution: 'Google',
        date: 'July, 2022',
        img: 'https://coursera.org/share/ba79f813245b5c670999acbf2be1c8b2',
        mini: 'https://i.imgur.com/jJ3ysZX.jpg'
    }, {
        id: 6,
        title: 'ETL and Data Pipelines with Shell, Airflow and Kafka',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://coursera.org/share/0c2f302731c0f31ba84c2cfb3c16fd2c',
        mini: 'https://i.imgur.com/amS8EJe.jpg'
    }, {
        id: 7,
        title: 'Neural Networks and Deep Learning',
        institution: 'Deeplearning.ai',
        date: 'June, 2022',
        img: 'https://coursera.org/share/76797bf995836c15e53a4e390f2de986',
        mini: 'https://i.imgur.com/85AS6CX.jpg'
    }, {
        id: 8,
        title: 'Excel Basics for Data Analysis',
        institution: 'IBM',
        date: 'June, 2022',
        img: 'https://coursera.org/share/3b0202aebfb2f605bc272b37e40c6b70',
        mini: 'https://i.imgur.com/oa8VeCU.jpg'
    }, {
        id: 9,
        title: 'Probability and Statistics for Experimental Physics',
        institution: 'Facultad de Ciencias Exactas, Universidad Nacional de La Plata',
        date: 'Second Semester, 2020',
        img: 'https://imgur.com/tY4PNf0.jpg',
        mini: 'https://imgur.com/tY4PNf0.jpg'
    }]

    return (
        <div className='edu-container' id='courses-container'>
            <h2 className='section-title'>Courses:</h2>
            <hr />
            <div className="courses-cards">
                {courses.map(item =>
                    <CoursesCard key={item.id} values={item} />
                )}
            </div>
        </div>
    );
}

function CoursesCard({ values }) {
    const [ isEditing, setEditing ] = useState(false);
    const [ courses, setCourses ] = useState(values);
    let coursesList = null;

    if (!isEditing) {
        coursesList = 
            <div key={courses.id}>
                <div className="card-container">
                    <div className='info-container'>
                        <div className="entry"><label>Title: </label> {courses.title}</div>
                        <div className="entry"><label>Institution: </label> {courses.institution}</div>
                        <div className="entry"><label>Date: </label> {courses.date}</div>
                    </div>
                    {/* <div className="img-container">
                    {courses.mini === null ? (
                        <p>No Certificate</p>
                    ) : (
                        <div>
                            <img
                                src={courses.mini}
                                alt={courses.title}
                                style={{ width: 200 }}
                            />
                            <a href={courses.img} target="_blank" rel="noreferrer">
                                <button>Go to Course Certificate</button>    
                            </a>
                        </div> 
                    )}
                    </div> */}
                    <div className="button-container">
                        <a href={courses.img} target="_blank" rel="noreferrer">
                            <button className='img-button'>Go to Course</button>
                        </a>
                        <button className='edit-button' onClick={() => setEditing(!isEditing)}>
                        {isEditing
                        ? 'Save Information'
                        : 'Edit Information'
                        }
                        </button>
                    </div>
                </div>
            </div>
    } else {
        coursesList = 
        <div key={courses.id}>
            <div className="card-container">
                <div className='form-container'>
                    <form className='cv-form'>
                        <div className="entry">
                            <label>Title: </label>
                            <input name='title' value={courses.title} onChange={handleInfo}></input>
                        </div>
                        <div className="entry">
                            <label>Institution: </label>
                            <input name='institution' value={courses.institution} onChange={handleInfo}></input>
                        </div>
                        <div className="entry">
                            <label>Date: </label>
                            <input name='date' value={courses.date} onChange={handleInfo}></input>
                        </div>
                    </form>
                </div>
                {/* <div className="img-container">
                    <form className='form-container'>
                        <img
                            src={courses.mini}
                            alt={courses.title}
                            style={{ width: 200 }}
                        />
                        <label>New image:</label>
                        <input name='mini' value={courses.mini} onChange={handleInfo}></input>
                        <a href={courses.img} target="_blank" rel="noreferrer">
                        </a>
                        <label>New link:</label>
                        <input name='img' value={courses.img} onChange={handleInfo}></input>
                    </form>
                </div> */}
                    <div className="button-container">
                        <a href={courses.img} target="_blank" rel="noreferrer">
                            <button className='img-button'>Go to Course</button>
                        </a>
                        <button className='edit-button' onClick={() => setEditing(!isEditing)}>
                        {isEditing
                        ? 'Save Information'
                        : 'Edit Information'
                        }
                        </button>
                    </div>
            </div>
        </div>
    }
        
    function handleInfo(e) {
        setCourses({
            ...courses,
            [e.target.name]: e.target.value
        })
    };

    function handleEditing() {
        setEditing(!isEditing);
    }
    
    return coursesList
}