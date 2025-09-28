
import React, { useState, useEffect } from "react";
import SiteForm from "./components/siteForm";
import SitesList from "./components/siteList";



const API_URL = "http://localhost:3008/sites";

function App() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetchSites();
  }, []);

  const fetchSites = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setSites(data);
    } catch (err) {
      console.error("Error fetching sites:", err);
    }
  };

  const addSite = async (site) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(site),
      });

      if (res.ok) {
        fetchSites();
      } else {
        console.error("Failed to add site");
      }
    } catch (err) {
      console.error("Error adding site:", err);
    }
  };

  const deleteSite = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchSites();
      } else {
        console.error("Failed to delete site");
      }
    } catch (err) {
      console.error("Error deleting site:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ניהול אתרים</h1>
      <SiteForm onAdd={addSite} />
      <button className="refresh" onClick={fetchSites} style={{ margin: "10px 0" }}>
        רענן רשימה
      </button>
      <SitesList sites={sites} onDelete={deleteSite} />
    </div>
  );
}

export default App;
