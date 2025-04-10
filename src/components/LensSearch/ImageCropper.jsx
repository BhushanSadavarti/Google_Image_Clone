// src/components/LensSearch/ImageCropper.jsx
import React, { useState, useRef, useEffect } from "react";
import { CropperContainer, CropperControls } from "./styles";

const ImageCropper = ({ image, onCropComplete }) => {
  const [cropArea, setCropArea] = useState({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    if (image && canvasRef.current) {
      const img = new Image();
      img.src = image;
      imgRef.current = img;

      img.onload = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Initialize crop area to center of image
        setCropArea({
          x: img.width / 4,
          y: img.height / 4,
          width: img.width / 2,
          height: img.height / 2,
        });

        // Draw crop overlay
        drawCropOverlay();
      };
    }
  }, [image]);

  const drawCropOverlay = () => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw image
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Draw semi-transparent overlay
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Clear crop area
    ctx.clearRect(cropArea.x, cropArea.y, cropArea.width, cropArea.height);

    // Draw crop border
    ctx.strokeStyle = "#4285f4";
    ctx.lineWidth = 2;
    ctx.strokeRect(cropArea.x, cropArea.y, cropArea.width, cropArea.height);

    // Draw resize handles
    const handleSize = 10;
    ctx.fillStyle = "#4285f4";

    // Corner handles
    ctx.fillRect(
      cropArea.x - handleSize / 2,
      cropArea.y - handleSize / 2,
      handleSize,
      handleSize
    );
    ctx.fillRect(
      cropArea.x + cropArea.width - handleSize / 2,
      cropArea.y - handleSize / 2,
      handleSize,
      handleSize
    );
    ctx.fillRect(
      cropArea.x - handleSize / 2,
      cropArea.y + cropArea.height - handleSize / 2,
      handleSize,
      handleSize
    );
    ctx.fillRect(
      cropArea.x + cropArea.width - handleSize / 2,
      cropArea.y + cropArea.height - handleSize / 2,
      handleSize,
      handleSize
    );
  };

  useEffect(() => {
    drawCropOverlay();
  }, [cropArea]);

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    // Check if click is inside crop area
    if (
      x >= cropArea.x &&
      x <= cropArea.x + cropArea.width &&
      y >= cropArea.y &&
      y <= cropArea.y + cropArea.height
    ) {
      setIsDragging(true);
      setDragStart({ x: x - cropArea.x, y: y - cropArea.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);

    let newX = x - dragStart.x;
    let newY = y - dragStart.y;

    // Prevent crop area from going outside canvas
    newX = Math.max(0, Math.min(newX, canvas.width - cropArea.width));
    newY = Math.max(0, Math.min(newY, canvas.height - cropArea.height));

    setCropArea((prev) => ({
      ...prev,
      x: newX,
      y: newY,
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCrop = () => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Create a new canvas for the cropped image
    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = cropArea.width;
    croppedCanvas.height = cropArea.height;
    const croppedCtx = croppedCanvas.getContext("2d");

    // Draw the cropped portion of the image
    croppedCtx.drawImage(
      canvas,
      cropArea.x,
      cropArea.y,
      cropArea.width,
      cropArea.height,
      0,
      0,
      cropArea.width,
      cropArea.height
    );

    // Convert to data URL and complete
    const croppedImage = croppedCanvas.toDataURL("image/jpeg");
    onCropComplete(croppedImage);
  };

  return (
    <CropperContainer>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => handleMouseDown(e.touches[0])}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
        onTouchEnd={handleMouseUp}
      />

      <CropperControls>
        <button onClick={handleCrop}>Crop & Search</button>
      </CropperControls>
    </CropperContainer>
  );
};

export default ImageCropper;
