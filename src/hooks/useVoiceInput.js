// src/hooks/useVoiceInput.js
import { useState, useEffect, useCallback } from "react";

const useVoiceInput = (onTranscriptChange) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if browser supports SpeechRecognition
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event) => {
        const current = event.resultIndex;
        const currentTranscript = event.results[current][0].transcript;
        setTranscript(currentTranscript);

        if (onTranscriptChange) {
          onTranscriptChange(currentTranscript);
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onTranscriptChange]);

  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start();
        setIsListening(true);
        setTranscript("");
      } catch (error) {
        console.error("Error starting recognition:", error);
      }
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  }, [recognition]);

  return {
    isListening,
    startListening,
    stopListening,
    transcript,
  };
};

export default useVoiceInput;
