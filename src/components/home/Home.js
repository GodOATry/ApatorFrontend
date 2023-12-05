import React from "react";
import "./Home.css";

const Home = ({ clients }) => {
  return (
    <div className="home-container">
      {clients ? (
        <div>
          <h3 className="client-list-header">Clients List:</h3>
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
        <p className="loading-message">Loading client data...</p>
      )}
    </div>
  );
};

export default Home;
