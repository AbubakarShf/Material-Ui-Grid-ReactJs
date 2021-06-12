import BsModel from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';

const Model = ({
    show,
    handleClose,
    Error,
    setmodelName,
    setmodelYear,
    setmodelLocation,
    setmodelSkill,
    Value,
    modelName,
    modelYear,
    modelLocation, 
    modelSkill,
    setError
}) => {
    return <BsModel
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
        <BsModel.Header closeButton>
            <BsModel.Title className="ModelTitle">Add Person</BsModel.Title>
        </BsModel.Header>
        <BsModel.Body>
            <input className={Error === 'Name' ? 'ModelFieldError' : 'ModelField'} onChange={(e) => setmodelName(e.target.value)} placeholder="Name" />
            <input className={Error === 'Year' ? 'ModelFieldError' : 'ModelField'} onChange={(e) => setmodelYear(e.target.value)} placeholder="Years of experience" />
            <input className={Error === 'Location' ? 'ModelFieldError' : 'ModelField'} onChange={(e) => setmodelLocation(e.target.value)} placeholder="Current location" />
            <input className={Error === 'Skill' ? 'ModelFieldError' : 'ModelField'} onChange={(e) => setmodelSkill(e.target.value)} placeholder="Skills" />
        </BsModel.Body>
        <BsModel.Footer>
            <Button className="ModelButton" variant="dark" onClick={handleClose}>
                <h6 className="ModelCancel">Close</h6>
            </Button>
            <Button variant="primary" onClick={_ => Value(modelName, modelYear, modelLocation, modelSkill, setError)}>
                <h6 className="ModelSubmit" >Submit</h6>
            </Button>

        </BsModel.Footer>
    </BsModel>
}

export default Model;