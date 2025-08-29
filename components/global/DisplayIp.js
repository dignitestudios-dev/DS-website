// app/components/DisplayIp.js
"use client"; // Mark this component as a Client Component

import { GlobalContext } from "@/context/GlobalContext";
import { useEffect, useState, useContext } from "react";

const DisplayIp = () => {
  const [ip, setIp] = useState("");
  const { setUperIp } = useContext(GlobalContext);

  useEffect(() => {
    const fetchIp = async () => {
      const response = await fetch("/api/ip");
      const data = await response.json();
      setIp(data.ip);
      setUperIp(data.ip);
    };

    fetchIp();
  }, []);

  return (
    <div>
      <h1>Your IP address is: {ip}</h1>
    </div>
  );
};

export default DisplayIp;
