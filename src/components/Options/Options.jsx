import css from "./Options.module.css"

export default function Options({ feedback, onFeedbackChange, totalFeedback, feedbackReset }) {
    const updateFeedback = (feedbackType) => {
        onFeedbackChange({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    };
        return (
            <div className={css.buttonList}>
                <button onClick={() => updateFeedback("good")}>Good</button>
                <button onClick={() => updateFeedback("neutral")}>Neutral</button>
                <button onClick={() => updateFeedback("bad")}>Bad</button>
                {totalFeedback !== 0 && <button onClick={() => feedbackReset()}>Reset</button>}
            </div>  
        );
    }