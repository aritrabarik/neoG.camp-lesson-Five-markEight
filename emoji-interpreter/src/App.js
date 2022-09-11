import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",

  /** add some more to show how the app now expands when there's new data */
};

var emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here...");

  function emojiInputChangeHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("the given emoji is not in our database!");
    }
  }

  function emojiClickHanler(item) {
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>emojipediaaaaaaaaaa</h1>
      <input
        onChange={emojiInputChangeHandler}
        value={emoji}
        placeholder="enter emoji you want meaning of"
      ></input>
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((item) => (
        <span key={item} onClick={() => emojiClickHanler(item)}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default App;
