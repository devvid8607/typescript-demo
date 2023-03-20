type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
  // const word = "test";
  // const guessedLetters: string[] = [];
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.5em",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{ borderBottom: ".1em solid black", paddingLeft: "40px" }}
          key={index}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
