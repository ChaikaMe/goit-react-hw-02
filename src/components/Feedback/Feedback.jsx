export default function Feedback({ feedback, totalFeedback }) {
    return (
        <>
            <p>Good: <span>{feedback.good}</span></p>
            <p>Neutral: <span>{feedback.neutral}</span></p>
            <p>Bad: <span>{feedback.bad}</span></p>
            <p>Total: <span>{totalFeedback}</span></p>
            <p>Positive: <span>{(Math.round((feedback.good / totalFeedback) * 100))}</span>%</p>  

        </>
    );
}