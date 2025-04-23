export default function Header({ setGameStarted }) {
  function handleStartGame() {
    setGameStarted(true);
  }

  return (
    <>
      <h1>Quiz Game v3</h1>
      <button onClick={handleStartGame}>Start game!</button>
      <button>Settings</button>
    </>
  );
}
