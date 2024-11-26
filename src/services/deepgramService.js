export const transcribeAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append("file", audioBlob);

    try {
        const response = await fetch("https://api.deepgram.com/v1/listen", {
            method: "POST",
            headers: {
                Authorization: `Token ${process.env.REACT_APP_DEEPGRAM_API_KEY}`,
            },
            body: formData,
        });

        const result = await response.json();
        return result.results.channels[0].alternatives[0].transcript;
    } catch (error) {
        console.error("Error transcribing audio:", error);
        throw new Error("Transcription failed.");
    }
};
