import { useState } from 'react';

export default function PersonalInfo() {
    let info = { 
        name: 'Victoria Macarena Gardella Ruiz',
        mail: 'v.gardella.ruiz@gmail.com',
        phone: '+549 (221) 3XX XXXX',
        location: 'Buenos Aires, Argentina',
        img: 'https://i.imgur.com/CjepkMr.png'
    }

    const [ isEditing, setEditing ] = useState(false);
    const [ personalInfo, setPersonalInfo ] = useState(info);
    
    let infoStructure;

    if (isEditing) {
        infoStructure = (
            <div className="principal-container">
                <div className='avatar-container'>
                    <form className='form-container'>
                        <a href={personalInfo.img} target="_blank" rel="noreferrer">
                            <img src={personalInfo.img} alt='Profile' style={{ width: 200 }}/>
                        </a>
                    </form>
                </div>
                <form className='info-container'>
                    <h3 className='info-title' id='personal'>About myself:</h3>
                    <hr/>
                    <div className="data-input">
                        <div className="entry">
                            <label>Name: </label>
                            <input name='name' value={personalInfo.name} onChange={handleInfo}></input>
                        </div>
                        <div className="entry">
                            <label>Mail: </label>
                            <input name='mail' value={personalInfo.mail} onChange={handleInfo}></input>
                        </div>
                        <div className="entry">
                            <label>Phone: </label>
                            <input name='phone' value={personalInfo.phone} onChange={handleInfo}></input>
                        </div>
                        <div className="entry">
                            <label>Location: </label>
                            <input name='location' value={personalInfo.location} onChange={handleInfo}></input>
                        </div>
                    </div>
                    <div className='img-input'>
                        <label>New profile picture: </label>
                        <input name='img' value={personalInfo.img} onChange={handleInfo}></input>
                    </div>
                </form>
            </div>
        )
    } else {
        infoStructure = (
            <div className="principal-container">
                <div className='avatar-container'>
                    <img src={personalInfo.img} alt='Profile' style={{ width: 200 }}></img>
                </div>
                <div className='info-container'>
                    <h3 className='info-title' id='personal'>About myself:</h3>
                    <hr/>
                    <div className="data-input">
                        <div className="entry"><label>Name: </label> {personalInfo.name}</div>
                        <div className="entry"><label>Mail: </label> {personalInfo.mail}</div>
                        <div className="entry"><label>Phone: </label> {personalInfo.phone}</div>
                        <div className="entry"><label>Location: </label> {personalInfo.location}</div>
                    </div>
                    <div className='img-input'>

                    </div>
                </div>
            </div>
            

        )
    }

    function handleEdit() {
        setEditing(!isEditing);
    }

    function handleInfo(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='principal' id='general-information'>
            { infoStructure }
            <button className='edit-button' onClick={handleEdit}>
            {isEditing
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}