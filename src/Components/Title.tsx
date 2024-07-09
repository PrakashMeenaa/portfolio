"use client";

import { useEffect } from "react";

export default function Title() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "👀 Hey, don't forget me!";
      } else {
        document.title = "Prakash Meena"; 
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; 
}
