import css from "./Options.module.css"

export default function Options({ updateFeedback, totalFeedback, feedbackReset }) {
        return (
            <div className={css.buttonList}>
                <button onClick={() => updateFeedback("good")}>Good</button>
                <button onClick={() => updateFeedback("neutral")}>Neutral</button>
                <button onClick={() => updateFeedback("bad")}>Bad</button>
                {totalFeedback > 0 && <button onClick={() => feedbackReset()}>Reset</button>}
            </div>  
        );
    }