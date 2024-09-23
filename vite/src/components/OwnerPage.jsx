import React, { useEffect, useState } from "react";

const OwnerPage = () => {
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setOwnerName(name);
    }
  }, []);

  return (
    <div className="owner-page">
      <h1>Owner Page</h1>
      {ownerName ? <p>Owner Name: {ownerName}</p> : <p>No Owner Found</p>}
    </div>
  );
};

export default OwnerPage;
