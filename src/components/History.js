import React from "react";

const History = ({ history }) => {
    return (
        <div className="history">
            <h2>Past Transcriptions</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;
