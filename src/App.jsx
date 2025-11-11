import React, { useState, useEffect } from "react";
import { Faker, fa, base } from "@faker-js/faker";
const faker = new Faker({
  locale: [base, fa],
});

const App = () => {
  const [randomText, setRandomText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    generateRandomText();
  }, []);

  const generateRandomText = () => {
    const text = faker.lorem.paragraph();
    setRandomText(text);
    setUserInput("");
    setStartTime(null);
    setResult("");
  };

  const onResultChange = (e) => {
    if (startTime === null) setStartTime(Date.now());
    setUserInput(e.target.value);
  };

  const resultCheck = () => {
    const trimmedInput = userInput.trim();
    const trimmedTarget = randomText.trim();
    if (trimmedInput === trimmedTarget) {
      const endTime = Date.now();
      const durationMinutes = (endTime - startTime) / 60000;
      const wordCount = randomText.split(" ").length;
      const wordsPerMinute = Math.round(wordCount / durationMinutes);

      const level =
        wordsPerMinute < 20
          ? "beginner"
          : wordsPerMinute < 40
          ? "mid"
          : wordsPerMinute < 60
          ? "advanced"
          : "pro";
      setResult(
        `you typed ${wordsPerMinute} words per minute. Your level is ${level}`
      );
    } else {
      setResult("try again!");
    }
  };
  return (
    <div>
      <h1>typing speed test</h1>
      <p>{randomText}</p>
      <textarea
        value={userInput}
        onChange={onResultChange}
        placeholder="Type here"
      />
      <div className="button-area">
        <button onClick={resultCheck}>check</button>
        <button onClick={generateRandomText}>reset</button>
      </div>
      {result && <p>{result}</p>}
    </div>
  );
};

export default App;
