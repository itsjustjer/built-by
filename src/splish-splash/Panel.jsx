import './splish.css';

export default function Panel({title, children, isActive, onShow }) {
    return (
        <section className="clicky-section">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    clicky?
                </button>
            
            )}
        </section>
    );
};
