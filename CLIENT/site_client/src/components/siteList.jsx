import React from "react";

function SitesList({ sites, onDelete }) {
  return (
    <div>
      <h3>רשימת אתרים</h3>
      {sites.length === 0 ? (
        <p>אין אתרים להצגה</p>
      ) : (
        <ul>
          {sites.map((site) => (
            <li key={site._id}>
              <strong>{site.name}</strong> - {site.url} - ציון: {site.score}
              <br />
              <img src={site.image} alt={site.name} width="100" />
              <br />
              <button onClick={() => onDelete(site._id)}>מחק</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SitesList;
