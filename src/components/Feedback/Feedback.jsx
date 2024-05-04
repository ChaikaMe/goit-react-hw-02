export default function Feedback({ feedback, totalFeedback, positiveRate }) {
    return (
        <>
            <p>Good: <span>{feedback.good}</span></p>
            <p>Neutral: <span>{feedback.neutral}</span></p>
            <p>Bad: <span>{feedback.bad}</span></p>
            <p>Total: <span>{totalFeedback}</span></p>
            <p>Positive: <span>{positiveRate}</span>%</p>  

        </>
    );
}