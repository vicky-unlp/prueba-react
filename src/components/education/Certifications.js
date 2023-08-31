import { useState } from 'react';

export function Certifications() {
    let certif = [{
        id: 0,
        title: 'Data Science Certification',
        institution: 'Coderhouse',
        date: 'September, 2022',
        img: 'https://imgur.com/eSfuR4m.jpg'
    }, {
        id: 1,
        title: 'Data Analytics Certification',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://imgur.com/hHu4hyC.jpg'
    }]

    return (
        <div className='edu-container' id='certification-container'>
            <h2 className='section-title'>Certifications</h2>
            <hr />
            <div className="certification-cards">
                {certif.map(item =>
                    <CertifCard key={item.id} values={item} />
                )}
            </div>
        </div>
    );
};

function CertifCard({ values }) {
    const [ isEditing, setEditing ] = useState(false);
    const [ certifications, setCertifications ] = useState(values);
    let certList = null;

    if (!isEditing) {
        certList = 
            <div>
                <div className="card-container">
                    <div className='info-container'>
                        <div className="entry"><label>Title: </label> {certifications.title}</div>
                        <div className="entry"><label>Institution: </label> {certifications.institution}</div>
                        <div className="entry"><label>Date: </label> {certifications.date}</div>
                    </div>
                    {/* <div className="img-container">
                        <a href={certifications.img} target="_blank" rel="noreferrer">
                            <img
                                src={certifications.img}
                                alt={certifications.title}
                                style={{ width: 200 }}
                            />
                        </a>
                    </div> */}
                    <div className="button-container">
                        <a href={certifications.img} target="_blank" rel="noreferrer">
                            <button className='img-button'>Go to Certificate</button>
                        </a>
                        <button className='edit-button' onClick={() => setEditing(!isEditing)}>
                        {isEditing
                        ? 'Save Information'
                        : 'Edit Information'
                        }
                        </button>
                    </div>
                </div>
            </div>;
    } else {
        certList = 
            <div>
                <div className="card-container">
                    <div className='form-container'>
                        <form className='cv-form'>
                            <div className="entry">
                                <label>Title: </label>
                                <input name='title' value={certifications.title} onChange={handleInfo}></input>
                            </div>
                            <div className="entry">
                                <label>Institution: </label>
                                <input name='institution' value={certifications.institution} onChange={handleInfo}></input>
                            </div>
                            <div className="entry">
                                <label>Date: </label>
                                <input name='date' value={certifications.date} onChange={handleInfo}></input>
                            </div>
                        </form>
                    </div>
                    {/* <div className="img-container">
                        <form className='form-container'>
                            <a href={certifications.img} target="_blank" rel="noreferrer">
                                <img
                                    src={certifications.img}
                                    alt={certifications.title}
                                    style={{ width: 200 }}
                                />
                            </a>
                            <label>New image:</label>
                            <input name='img' value={certifications.img} onChange={handleInfo}></input>
                        </form>
                    </div> */}
                    <div className="button-container">
                        <a href={certifications.img} target="_blank" rel="noreferrer">
                            <button className='img-button'>Go to Certificate</button>
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
        setCertifications({
            ...certifications,
            [e.target.name]: e.target.value
        });
    };

    function handelEditing() {
        setEditing(!isEditing);
    }

    return certList;
}
