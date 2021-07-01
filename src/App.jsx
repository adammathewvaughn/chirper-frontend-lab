import React, { useState } from "react";
import Timeline from "./components/Timeline";


const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chirps, setChirps] = useState([
    { username: "bob", message: "whats up" },
    { username: "jon", message: "chillin" },
    { username: "dave", message: "vibin" },
  ]);

  let submitChirp = (e) => {
    e.preventDefault();
    let newChirp = { username: username, message: message };

    //inside array brackets, use spread operator on existing chirps, then include the newChirp from line 12
    setChirps([...chirps, newChirp]);
  };
  return (
    <>
      <div className="bodydiv">
        <div className="card1">
          <div className="card-body display-flex height:700px">
            <div>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                className="username mb-.75"
                placeholder="@username"
              />
            </div>
            <div>
              {" "}
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="maintextinput"
                className="maintextinput mb-2"
                placeholder="Compose Chirp Here!"
                rows="10"
                cols="30"
              ></textarea>
            </div>
            <div>
              <input
                onClick={(e) => {
                  submitChirp(e);
                }}
                type="submit"
                className="chirpbtn btn btn-danger"
                value="Chirp It!"
              />
            </div>
          </div>
        </div>
      </div>
    {chirps.map(chirps)=>{ //?
       {//? ??} 
    }} 
      <Timeline chirps={chirps} />
    </>
  );
};

export default App;
