import { useState } from 'react';

export function Degrees() {
    let bachelor = {
            university: 'Universidad Nacional de La Plata',
            school: 'Facultad de Ciencias Exactas',
            career: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            status: 'Complete',
            duration: '2013-2018',
        };
        
    let doctorate = {
            university: 'Universidad Nacional de La Plata',
            institution: 'Institute of Biotecnology and Molecular Biology',
            career: 'PhD in Biotechnology and Molecular Biology',
            status: 'Abandoned',
            duration: '2018-2022',
            theme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
        };

    return (
        <div className='edu-container' id='degree-container'>
            <h2 className='section-title'>Degrees</h2>
            <hr/>
            <h3 className='subsection-title'>Undergraduate Degree</h3>
                <div id="bach-container">
                    <BachelorCard values={bachelor} />
                </div>
            <h3 className='subsection-title'>Postgraduate Degree</h3>
                <div id="phd-container">
                    <PhdCard values={doctorate} />
                </div>
        </div>
    );
}

function BachelorCard({ values }) {
    const [ isEditingBach, setEditingBach ] = useState(false);
    const [ bach, setBach ] = useState(values);
    let bachStructure = null;

    if (isEditingBach) {
        bachStructure = (
            <form className='cv-form'>
                <div className="entry">
                    <label>Career: </label>
                    <input name='career' value={bach.career} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Institution: </label>
                    <input name='school' value={bach.school} onChange={handleInfo}></input>
                    ,
                    <input name='university' value={bach.university} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Status: </label>
                    <input name='status' value={bach.status} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Duration: </label>
                    <input name='duration' value={bach.duration} onChange={handleInfo}></input>
                </div>
            </form>
        );
    } else {
        bachStructure = (
            <div>
                <div className="entry"><label>Career: </label> {bach.career}</div>
                <div className="entry"><label>Institute: </label> {bach.school}, {bach.university}</div>
                <div className="entry"><label>Status: </label> {bach.status}</div>
                <div className="entry"><label>Duration: </label> {bach.duration}</div>
            </div>
    )};

    function handleInfo(e) {
        setBach({
            ...bach,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='card-container'>
            { bachStructure }
            <button className='edit-button' onClick={() => {setEditingBach(!isEditingBach)}}>
            {isEditingBach
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}


function PhdCard({ values }) {
    const [ isEditingPhd, setEditingPhd ] = useState(false);
    const [ phd, setPhd ] = useState(values);
    let phdStructure = null;

    if (isEditingPhd) {
        phdStructure = (
            <form className='cv-form'>
                <div className="entry">
                    <label>Career: </label>
                    <input name='career' value={phd.career} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Institution: </label>
                    <input name='institution' value={phd.institution} onChange={handleInfo}></input>
                     -
                    <input name='university' value={phd.university} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Theme: </label>
                    <input name='theme' value={phd.theme} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Status: </label>
                    <input name='status' value={phd.status} onChange={handleInfo}></input>
                </div>
                <div className="entry">
                    <label>Duration: </label>
                    <input name='duration' value={phd.duration} onChange={handleInfo}></input>
                </div>
            </form>
        );
    } else {
        phdStructure = (
            <div>
                <div className="entry"><label>Career: </label> {phd.career}</div>
                <div className="entry"><label>Institute: </label> {phd.institution} - {phd.university}</div>
                <div className="entry"><label>Theme: </label> {phd.theme}</div>
                <div className="entry"><label>Status: </label> {phd.status}</div>
                <div className="entry"><label>Duration: </label> {phd.duration}</div>
            </div>
    )};


    function handleInfo(e) {
        setPhd({
            ...phd,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div className='card-container'>
            { phdStructure }
            <button className='edit-button' onClick={() => {setEditingPhd(!isEditingPhd)}}>
            {isEditingPhd
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );

}