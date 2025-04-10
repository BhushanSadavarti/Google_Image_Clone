// src/hooks/useCamera.js
import { useCallback } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";

const useCamera = () => {
  const takePicture = useCallback(async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
      });

      return image.dataUrl;
    } catch (error) {
      console.error("Error taking picture:", error);
      throw error;
    }
  }, []);

  const selectFromGallery = useCallback(async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: "PHOTOS",
      });

      return image.dataUrl;
    } catch (error) {
      console.error("Error selecting from gallery:", error);
      throw error;
    }
  }, []);

  return {
    takePicture,
    selectFromGallery,
  };
};

export default useCamera;
