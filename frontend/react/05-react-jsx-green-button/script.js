
const App = ({ initialButtonText, initialButtonClass }) => {
    const [buttonText, setButtonText] = React.useState(initialButtonText);
    const [classesList, setClassesList] = React.useState(initialButtonClass);
    const onButtonClick = () => {
        setButtonText('Hello from react');
        setClassesList('green-btn');
    };
    return (
        <div className="app">
            <button className={classesList} onClick={onButtonClick}>
                {buttonText}
            </button>
        </div>
    );
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialButtonClass="" />);