// src/components/LensSearch/LensSearch.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CameraView from './CameraView';
import ImageCropper from './ImageCropper';
import { LensContainer, LensHeader, LensFooter, BottomSheet, SheetContent, GalleryButton } from './styles';
import { ArrowLeft, X, Image, Camera } from 'lucide-react';
import useCamera from '../../hooks/useCamera';

const LensSearch = () => {
  const { setSearchImage, performImageSearch } = useContext(AppContext);
  const navigate = useNavigate();
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCropMode, setIsCropMode] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const { takePicture, selectFromGallery } = useCamera();

  const handleCapture = async () => {
    try {
      const imageData = await takePicture();
      setCapturedImage(imageData);
      setIsCropMode(true);
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  const handleGallerySelect = async () => {
    try {
      const imageData = await selectFromGallery();
      setCapturedImage(imageData);
      setIsCropMode(true);
      setIsGalleryOpen(false);
    } catch (error) {
      console.error('Error selecting image from gallery:', error);
    }
  };

  const handleCropComplete = (croppedImage) => {
    setSearchImage(croppedImage);
    performImageSearch(croppedImage);
    navigate('/results');
  };

  const handleBack = () => {
    if (isCropMode) {
      setIsCropMode(false);
      setCapturedImage(null);
    } else {
      navigate('/');
    }
  };

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  return (
    <LensContainer>
      <LensHeader>
        <button onClick={handleBack}>
          {isCropMode ? <X size={24} /> : <ArrowLeft size={24} />}
        </button>
        <h2>Google Lens</h2>
      </LensHeader>

      {isCropMode ? (
        <ImageCropper 
          image={capturedImage} 
          onCropComplete={handleCropComplete} 
        />
      ) : (
        <CameraView onCapture={handleCapture} />
      )}

      <LensFooter>
        {!isCropMode && (
          <>
            <GalleryButton onClick={toggleGallery}>
              <Image size={24} />
            </GalleryButton>
            <button className="capture-btn" onClick={handleCapture}>
              <Camera size={36} />
            </button>
          </>
        )}
      </LensFooter>

      <BottomSheet isOpen={isGalleryOpen}>
        <SheetContent>
          <h3>Select from gallery</h3>
          <button onClick={handleGallerySelect}>Choose photo</button>
          <button onClick={toggleGallery}>Cancel</button>
        </SheetContent>
      </BottomSheet>
    </LensContainer>
  );
};

export default LensSearch;