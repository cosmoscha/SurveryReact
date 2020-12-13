import React, { useState } from "react";

const Inventory = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  const handleSubmit = (e) => {
    //prevents the default form behavior
    //so the page doesnt reload
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Inventory</h2>
      </div>
      <div>
        <p>I learn the most when the lesson engages my sense of sight</p>
        <select
          name="q1"
          onChange={(e) => setValue1(0, e.target.value)}
          value={value1}
        >
          <Options />
        </select>
      </div>
      <div>
        <p>I learn the most when the lesson engages my sense of hearing</p>
        <select
          name="q2"
          onChange={(e) => setValue2(1, e.target.value)}
          value={value2}
        >
          <Options />
        </select>
      </div>
      <div>
        <p>
          I learn the most when the lesson engages my sense of touch, taste or
          smell
        </p>
        <select
          name="q3"
          onChange={(e) => setValue3(2, e.target.value)}
          value={value3}
        >
          <Options />
        </select>
      </div>
      <div className="form-buttons">
        <button type="submit"> Submit</button>
      </div>
    </form>
  );
};

const Options = () => {
  return [
    <option key="prompt" value="" disabled>
      select one ...
    </option>,
    <option key="1" value="1">
      Strongly Disagree
    </option>,
    <option key="2" value="2">
      Disagree
    </option>,
    <option key="3" value="3">
      Neutral
    </option>,
    <option key="4" value="4">
      Agree
    </option>,
    <option key="5" value="5">
      Strongly Agree
    </option>,
  ];
};
// {
//   "code":"q1",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>sight</em>.",
//   "scale": "Agreement"
// },
// {
//   "code":"q2",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>hearing</em>.",
//   "scale": "Agreement"
// },
// {
//   "code":"q3",
//   "type": "likert",
//   "stem": "I learn the most when the lesson engages my sense of <em>touch, taste or smell</em>.",
//   "scale": "Agreement",
//   "pagebreak": true
// },

export default Inventory;
