import React, { useState } from "react";
import Microphone from "./components/Microphone";
import Transcription from "./components/Transcription";
import History from "./components/History";
import { transcribeAudio } from "./services/deepgramService";

const App = () => {
    const [transcription, setTranscription] = useState("");
    const [history, setHistory] = useState([]);

    const handleRecordingComplete = async (audioBlob) => {
        try {
            const result = await transcribeAudio(audioBlob);
            setTranscription(result);
            setHistory((prev) => [result, ...prev]);
        } catch (error) {
            setTranscription("Error during transcription. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1>Audio Transcription App</h1>
            <Microphone onRecordingComplete={handleRecordingComplete} />
            <Transcription transcription={transcription} />
            <History history={history} />
        </div>
    );
};

export default App;
