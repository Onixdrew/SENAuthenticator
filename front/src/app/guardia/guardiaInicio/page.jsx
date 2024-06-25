"use client";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar/navbar";

export default function Page() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startCamera = async () => {
    try {
      const videoStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = videoStream;
      setStream(videoStream);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar op1="Home" op2="Registro" op3="Historial" Link1="/guardia/guardiaInicio" Link2="/guardia/guardiaRegistro" Link3="guardia/guardiaHistorial" />
      </header>
      <main>
        <div>
          <div
            style={{
              width: "400px",
              height: "300px",
              border: "1px solid black",
              marginTop: "10px",
            }}
          >
            <video
              ref={videoRef}
              autoPlay
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
