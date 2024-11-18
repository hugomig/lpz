import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="errorContainer">
            <h1>Erreur 404 not found :'(</h1>
            <div>On peut savoir ce que tu essayes de faire au juste ?</div>
            <img src="/regard_zepeck.jpg" />
        </div>
    );
}

export { ErrorPage };
