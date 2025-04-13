import styled from "styled-components";

export const LensContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000;
  position: relative;
`;

export const LensHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  button {
    background: transparent;
    border: none;
    color: white;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const LensFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  .capture-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
    border: 3px solid #4285f4;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const GalleryButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  position: absolute;
  left: 24px;
`;

export const CameraViewContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .camera-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .focus-area {
    width: 70%;
    height: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
  }
`;

export const CropperContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  canvas {
    flex: 1;
    width: 100%;
    height: auto;
    touch-action: none;
  }
`;

export const CropperControls = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: #000;

  button {
    background-color: #4285f4;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transform: translateY(${(props) => (props.isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 100;
`;

export const SheetContent = styled.div`
  padding: 24px;

  h3 {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
    color: #202124;
  }

  button {
    display: block;
    width: 100%;
    padding: 12px;
    margin-bottom: 8px;
    border: none;
    background-color: ${(props) => (props.primary ? "#4285f4" : "#f1f3f4")};
    color: ${(props) => (props.primary ? "white" : "#202124")};
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
`;
