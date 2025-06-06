import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedTImeRemaining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score {score}</h2>}
            <p>The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>You stopped the timer with <strong>{formattedTImeRemaining} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}