"use client";

import React, { useEffect, useState } from "react";

const CountryLookup = () => {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      );
      const data = await response.json();
      setCountry(data.country);
    };

    fetchData();
  }, []);

  return <div>{country}</div>;
};

export default CountryLookup;
