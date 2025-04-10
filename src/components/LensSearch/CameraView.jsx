// src/components/LensSearch/CameraView.jsx
import React, { useRef, useEffect } from "react";
import { CameraViewContainer } from "./styles";

const CameraView = ({ onCapture }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <CameraViewContainer>
      <video ref={videoRef} autoPlay playsInline muted />
      <div className="camera-overlay">
        <div className="focus-area" />
      </div>
    </CameraViewContainer>
  );
};

export default CameraView;
