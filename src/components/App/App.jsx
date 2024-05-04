import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

export default function App() {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("savedFeedback");
        return savedFeedback !== null ?
            (JSON.parse(savedFeedback)) :
            ({
                good: 0,
                neutral: 0,
                bad: 0
            });
    });

    useEffect(() => {
        window.localStorage.setItem("savedFeedback", JSON.stringify(feedback))
    }, [feedback])
    
    const feedbackReset = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0
        })
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const handleFeedbackChange = (newFeedback) => {
        setFeedback(newFeedback);
    };
    return (
        <>
            <Description />
            <Options
                feedback={feedback}
                onFeedbackChange={handleFeedbackChange}
                totalFeedback={totalFeedback}
                feedbackReset={feedbackReset} />
            {totalFeedback == 0 ?
                (<Notification />) :
                (<Feedback feedback={feedback} totalFeedback={totalFeedback} />)}

        </>
    );
}