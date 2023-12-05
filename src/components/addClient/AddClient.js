import React, { useState } from 'react';
import './AddClient.css';
import axios from 'axios';


const AddClient = ({ clients }) => {
    const [popupMessage, setPopupMessage] = useState(null);
  const [newClient, setNewClient] = useState({
    name: '',
    isVIP: false,
    isUrgent: false,
    pin: '',
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === 'checkbox') {
      const otherCheckbox = name === 'isVIP' ? 'isUrgent' : 'isVIP';


      if (newClient[otherCheckbox]) {
        setNewClient((prevClient) => ({
          ...prevClient,
          [otherCheckbox]: false,
        }));
      }

  
      setNewClient((prevClient) => ({
        ...prevClient,
        selectedCheckbox: checked ? name : '',
        [name]: checked,
        pin: checked && name === 'isVIP' ? '' : prevClient.pin,
      }));
    } else {
      setNewClient((prevClient) => ({ ...prevClient, [name]: value }));
    }
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!newClient.name) {
      setPopupMessage({ type: 'error', text: 'Please enter a name for the client' });
      return;
    }
  
    const api = axios.create({
      baseURL: 'http://localhost:8080/',
      headers: { "ngrok-skip-browser-warning": "true" }
    });
  
    try {
      const response = await api.post('/placeOrder', newClient);
      console.log('Client added successfully:', response.data);
  
      setPopupMessage({ type: 'success', text: 'Client added successfully' });
  
      setNewClient({
        name: '',
        isVIP: false,
        isUrgent: false,
        pin: '',
      });
    } catch (error) {
      console.error('Error adding client:', error.response.data);
  
      setPopupMessage({ type: 'error', text: 'Error adding client: ' + error.response.data });
    }
  
    setTimeout(() => {
      setPopupMessage(null);
    }, 3000);
  };
  

  return (
    <div className="AddClientContainer">
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newClient.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVIP"
            checked={newClient.isVIP}
            onChange={handleInputChange}
          />
          Is VIP
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isUrgent"
            checked={newClient.isUrgent}
            onChange={handleInputChange}
          />
          Is Urgent
        </label>
        <br />
        {(newClient.isVIP || newClient.isUrgent) && (
          <label>
            PIN:
            <input
              type="text"
              name="pin"
              value={newClient.pin}
              onChange={handleInputChange}
              disabled={!(newClient.isVIP || newClient.isUrgent)} 
            />
          </label>
        )}
        <br />
        <button type="submit">Add Client</button>
      </form>
       {popupMessage && (
        <div className={popupMessage.type === 'success' ? 'success-popup' : 'error-popup'}>
          {popupMessage.text}
        </div>
      )}
    </div>
  );
};

export default AddClient;
