import { Outlet } from "react-router-dom";
import "./Monitoring.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Monitoring = () => {
  const [numberInput, setNumberInput] = useState('');
  const [timeToWait, setTimeToWait] = useState('');
  const [monitoringStatus, setMonitoringStatus] = useState('');
  const [clients, setClients] = useState([]);
  const [pollingInterval, setPollingInterval] = useState(null);

  const handleNumberInputChange = (event) => {
    const { value } = event.target;
    setNumberInput(value);
  };

  const handleStartMonitoring = async () => {
    if (!numberInput) {
      setMonitoringStatus('Please enter a number or name to monitor');
      return;
    }
    if (pollingInterval) {
        clearInterval(pollingInterval);
        setPollingInterval(null);
      }
    try {
      const api = axios.create({
        baseURL: 'http://localhost:8080/',
        headers: { "ngrok-skip-browser-warning": "true" }
      });

      const response = await api.get(`/clientToMonitor?clientInfo=${numberInput}`);
      setClients(response.data.listClientDTO);
      setTimeToWait(response.data.timeToWait);

      setMonitoringStatus(`Monitoring number ${numberInput}...`);

      const intervalId = setInterval(async () => {
        const pollResponse = await api.get(`/clientToMonitor?clientInfo=${numberInput}`);
        setClients(pollResponse.data.listClientDTO);
        setTimeToWait(pollResponse.data.timeToWait);
      }, 2000);

      setPollingInterval(intervalId);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (clients.length === 0 && pollingInterval) {
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
  }, [clients, pollingInterval,timeToWait]);

  return (
    <div className="MonitoringContainer">
      <label>
        Number or Name to monitor:
        <input
          type="string"
          value={numberInput}
          onChange={handleNumberInputChange}
        />
      </label>
      <br />
      <button type="button" onClick={handleStartMonitoring}>Start Monitoring</button>
      <br />
      {clients.length > 0 ? (
        <div>
         <h3 className="client-list-header">Time to wait &lt; {timeToWait}</h3>
          <table className="client-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Client Number</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.clientNumber} className="client-item">
                  <td>{client.name}</td>
                  <td>{client.clientNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="loading-message"></p>
      )}
      <div className="MonitoringStatus">{monitoringStatus}</div>
      <Outlet />
    </div>
  );
};

export default Monitoring;
