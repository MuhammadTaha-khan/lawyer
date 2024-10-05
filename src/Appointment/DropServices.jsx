// src/DropServices.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setService } from '../features/appointmentSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const DropServices = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const dispatch = useDispatch();

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
    dispatch(setService(eventKey));
  };

  return (
    <div>
      <div className="container fluid-lg AppService">
        <div className="col-md-8">
          <p className=''>Select Category</p>
          <div>
            <InputGroup className="mb-3">
              <Form.Control 
                aria-label="Text input with dropdown button" 
                value={selectedItem} 
                readOnly 
              />
              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
                align="end"
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="Criminal">Criminal </Dropdown.Item>
                <Dropdown.Item eventKey="Family">Family </Dropdown.Item>
                <Dropdown.Item eventKey="Personal Injury">Personal Injury</Dropdown.Item>
                <Dropdown.Item eventKey="Employment">Employment </Dropdown.Item>
                <Dropdown.Item eventKey="Intellectual Property">Intellectual Property </Dropdown.Item>
                <Dropdown.Item eventKey="Tax">Tax </Dropdown.Item>
                <Dropdown.Item eventKey="Real Estate">Real Estate </Dropdown.Item>
                <Dropdown.Item eventKey="Environmental">Environmental  </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropServices;

