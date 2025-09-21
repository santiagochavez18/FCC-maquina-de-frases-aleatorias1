const { useState, useEffect } = React;


const ROCK_QUOTES = [
    { text: "Vivir solo cuesta vida.", author: "Los Redondos" },
    { text: "El futuro llegó hace rato.", author: "Los Redondos" },
    { text: "Cuando la noche es más oscura, se viene el día en tu corazón.", author: "Los Redondos" },
    { text: "El rito de tus ojos, iluminando el veneno.", author: "Soda Stereo" },
    { text: "Que sea rock, mi amor. Que sea rock.", author: "Pappo" },
    { text: "Sé que soy pesado, terco, necio, y es por eso que estoy acá.", author: "Almafuerte" },
    { text: "Por ser de la misma condición, no nos vamos a perdonar.", author: "Almafuerte" },
    { text: "Yo no soy de la nobleza, ni tampoco un delincuente.", author: "Intoxicados" },
    { text: "Está saliendo el sol, y la noche se va. A ver si sale de nuevo y me rescata.", author: "Intoxicados" },
    { text: "Todo lo que me gusta es ilegal, es inmoral o engorda.", author: "Patricio Rey" },
    { text: "Verdes paisajes, abismos de piedra. La furia que hay en mí, no me deja ver.", author: "Los Piojos" },
    { text: "Tan solo, y tan lleno de gente.", author: "Los Piojos" },
    { text: "Me verás volver, y me verás volver a tu lado.", author: "Soda Stereo" },
    { text: "Violencia es mentir.", author: "Los Redondos" },
    { text: "Pensé que era el único que te esperaba, y sos la única que me puede curar.", author: "Las Pastillas del Abuelo" },
    { text: "No me lastimes con la verdad, prefiero la fantasía.", author: "Charly García" },
    { text: "Aunque te duela, el capitán de tu vida, siempre tenés que ser vos.", author: "La Renga" }
];

const COLORS = [
    '#4b0101ff', 
    '#3f1200ff', 
    '#410000ff', 
    '#1a0022ff', 
    '#002e74ff', 
    '#05013fff', 
    '#3d1a00ff', 
    '#0d3233ff'  
];

const App = () => {
    // El estado ahora se inicializa directamente con la primera frase de la lista
    const [currentQuote, setCurrentQuote] = useState(ROCK_QUOTES[0]);
    const [accentColor, setAccentColor] = useState(COLORS[0]);

    // useEffect se ejecuta solo una vez para establecer la primera frase y color aleatorios.
    useEffect(() => {
        handleNewQuote(); // Llamamos a la función para que la primera carga sea aleatoria.
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--accent-color', accentColor);
    }, [accentColor]);

    // La función ahora toma los datos del arreglo local ROCK_QUOTES.
    const handleNewQuote = () => {
        const quoteIndex = Math.floor(Math.random() * ROCK_QUOTES.length);
        const colorIndex = Math.floor(Math.random() * COLORS.length);
        
        setCurrentQuote(ROCK_QUOTES[quoteIndex]);
        setAccentColor(COLORS[colorIndex]);
    };

    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${currentQuote.text}" - ${currentQuote.author}`
    )}`;

    return (
        <div id="quote-box">
            <p id="text">{currentQuote.text}</p>
            <p id="author">- {currentQuote.author}</p>
            <div className="buttons">
                <a 
                    id="tweet-quote" 
                    href={tweetUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="¡Twittear esta frase!"
                >
                    Tweet
                </a>
                <button id="new-quote" onClick={handleNewQuote}>
                    Nueva Frase
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));