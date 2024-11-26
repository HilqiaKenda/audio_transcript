import React from "react";

const Transcription = ({ transcription }) => {
    return (
        <div>
            <h2>Transcription</h2>
            <p>{transcription || "No transcription available yet."}</p>
        </div>
    );
};

export default Transcription;
