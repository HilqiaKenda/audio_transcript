import React, { useState, useRef } from "react";

const Microphone = ({ onRecordingComplete }) => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.ondataavailable = (event) => {
            audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = () => {
            const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
            onRecordingComplete(audioBlob);
            audioChunks.current = [];
        };
        mediaRecorder.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        mediaRecorder.current.stop();
        setIsRecording(false);
    };

    return (
        <div>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
        </div>
    );
};

export default Microphone;
