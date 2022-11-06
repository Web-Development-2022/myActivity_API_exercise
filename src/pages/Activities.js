import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

export default function Activities() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [more, setMore] = useState("");
  const [eight, setEight] = useState("");

  const [type, setType] = useState("");
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e)
  }

  // Function for each button to show activities to be done depending on the chosen number of participants.
  // Unfortunately I didn't manage to pass the chosen value like for the dropdown version below.
  // The initial idea was that the value of each button (1, 2, 3 etc.) would be passed through the same type
  // of hook as the one for the dropdown, so that there wouldn't be a single function for each number of participant...

  // The following functions are then the exact same ones, only the number of participant (parameter) is modified.
  // I had to add even more functions than I initially wanted for the following reason: the API recognizes 1, 2, 3, 4, 5 and 8 participants.
  // I wanted to create functions for 1, 2, "more" and 8 participants, thinking that if I would use "5" as a parameter,
  // it would include activities for 3, 4 AND 5 participants, but that wasn't the case, you could clearly see that the
  // same activities would come back over and over again, and that they were designed for 5 participants only. I then thought about
  // maybe using 3 parameters inside the URL ("http://www.boredapi.com/api/activity?participants=${3, 4, 5}") but soon
  // realized that it wasn't working either: the results were activities fetched from the last params (if it was written 
  // like this: "3, 5, 4", it would print only activities for 4 participants.) Hence why there are 6 functions.
  // But, for design purposes, participants 3, 4 and 5 are stored altogether inside setMore and "more".

  // Positive outcome: possible to have written on the page activities for each choice.

  // The way it works: the URL contains the parameter "number of participants", sets it through "setNumber" and then
  // prints the related activity.


  // One participant
  async function oneParticipant(e) {
    e.preventDefault();
    try {
      const address = `http://www.boredapi.com/api/activity?participants=${1}`;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json(response);
        console.log(json.activity);
        setOne(json.activity);

      } else {
        alert("Error retrieving number of participants.");
        console.log(response);
      }

    } catch (error) {
      alert(error);
    } }

    // With two participants
    async function twoParticipants(e) {
      e.preventDefault();
      try {
        const address = `http://www.boredapi.com/api/activity?participants=${2}`;
        const response = await fetch(address);
  
        if (response.ok) {
          const json = await response.json(response);
          console.log(json.activity);
          setTwo(json.activity);
  
        } else {
          alert("Error retrieving number of participants.");
          console.log(response);
        }
  
      } catch (error) {
        alert(error);
      } }

      // With three participants
      async function threeParticipants(e) {
        e.preventDefault();
        try {
          const address = `http://www.boredapi.com/api/activity?participants=${3}`;
          const response = await fetch(address);
    
          if (response.ok) {
            const json = await response.json(response);
            console.log(json.activity);
            setMore(json.activity);
    
          } else {
            alert("Error retrieving number of participants.");
            console.log(response);
          }
    
        } catch (error) {
          alert(error);
        } }

      // With four participants
      async function fourParticipants(e) {
        e.preventDefault();
        try {
          const address = `http://www.boredapi.com/api/activity?participants=${4}`;
          const response = await fetch(address);
    
          if (response.ok) {
            const json = await response.json(response);
            console.log(json.activity);
            setMore(json.activity);
    
          } else {
            alert("Error retrieving number of participants.");
            console.log(response);
          }
    
        } catch (error) {
          alert(error);
        } }

      // With five participants
      async function fiveParticipants(e) {
        e.preventDefault();
        try {
          const address = `http://www.boredapi.com/api/activity?participants=${5}`;
          const response = await fetch(address);
    
          if (response.ok) {
            const json = await response.json(response);
            console.log(json.activity);
            setMore(json.activity);
    
          } else {
            alert("Error retrieving number of participants.");
            console.log(response);
          }
    
        } catch (error) {
          alert(error);
        } }

        // With 8 participants only
        async function eightParticipants(e) {
          e.preventDefault();
          try {
            const address = `http://www.boredapi.com/api/activity?participants=${8}`;
            const response = await fetch(address);
      
            if (response.ok) {
              const json = await response.json(response);
              console.log(json.activity);
              setEight(json.activity);
      
            } else {
              alert("Error retrieving number of participants.");
              console.log(response);
            }
      
          } catch (error) {
            alert(error);
          } }
  

  // Function for the dropdown to work. 
  // For this element, I managed to make it so that the value of the dropdown selection would modify the value
  // of the parameter in the API URL.
  // However, there is a little glitch, it takes two clicks for the parameters to start working as wanted.
  // Maybe there is a need to "empty" the value set, but I'm not even sure if it is possible, or if it the
  // root of the problem. Also because when using the console from "inspect" on the webpage, we can see
  // that the right value is console.logged before printing an activity. 

  // Negative outcome (maybe solvable): it is not possible to keep seeing the activities per different type,
  // as it is possible to keep seeing activities depending on the number of participants with the buttons above.

  // The way it works: when the user selects a value in the dropdown, it sets the element as the "value" with "setValue"
  // through the "onSelect" event, value which is then passed inside the URL. The function is called by the "onClick".

  async function byType(e) {
    e.preventDefault();
    try {
      const address = `http://www.boredapi.com/api/activity?type=${value}`;
      const response = await fetch(address);

      if (response.ok) {
        const json = await response.json(response);
        console.log(json.activity);
        setType(json.activity);

      } else {
        alert("Error retrieving type of activity.");
        console.log(response);
      }

    } catch (error) {
      alert(error);
    } }


  return (
    <div className="container-activities">
      <h1>Tell us what you are looking for</h1>
        <p id="intro">Finding activities, yes, that's a good idea, but what do you know?
          <br></br>With the two types of filters that you can find down below, tell us if you're
          looking for things to do by yourself or with friends,<br></br>or filter the
          the results based on what type of activity you're looking for: diy, relaxation, music etc.</p>
        <div id="row">
        <div className="single-btn-version column">
          <h3>Depending on the number of people</h3>
          <p>You might be looking for activities to do by yourself, or with your friends. 
            <br></br>Choose here how many people are involved !</p>
            <ul>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={oneParticipant}>Myself only</li>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={twoParticipants}>My friend & I</li>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={threeParticipants}>It's me and 2 other friends</li>
              <br></br>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={fourParticipants}>We're 4, ready to have fun</li>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={fiveParticipants}>5 of us are here</li>
              <li className="btn-more btn btn-outline-secondary" type="button" onClick={eightParticipants}>We're 8</li>
            </ul>
            <br></br>
            <ul id="results">
              <li>With you, and yourself only (it's important): <br></br><span>{one}</span></li>
              <li>What you and your bestie or neighbour can do together: <br></br><span>{two}</span></li>
              <li>If you have more friends you can do: <br></br><span>{more}</span></li>
              <li>In case you guys are 8 and not less: <br></br><span>{eight}</span></li>
            </ul>
        </div>
        <br></br>
        <br></br>
        <div className="dropdown-version column">
          <h3>Depending on the type of activity</h3>
          <p>You might be looking for activities based on their type. 
            <br></br>Choose here what kind of activity you wish to do !</p>
          <p id="note">(P.S: Our generator likes to double-check that you're sure of yourself. You might want to click two times <br></br>the type of activity of your choice!)</p>
          <br></br>
            <DropdownButton
                title="What do you have in mind? "
                id="dropdown-menu"
                onSelect={handleSelect} >
                  <Dropdown.Item eventKey="education" onClick={byType}>Education</Dropdown.Item>
                  <Dropdown.Item eventKey="recreational" onClick={byType}>Recreational</Dropdown.Item>
                  <Dropdown.Item eventKey="social" onClick={byType}>Social</Dropdown.Item>
                  <Dropdown.Item eventKey="diy" onClick={byType}>DIY</Dropdown.Item>
                  <Dropdown.Item eventKey="charity" onClick={byType}>Charity</Dropdown.Item>
                  <Dropdown.Item eventKey="cooking" onClick={byType}>Cooking</Dropdown.Item>
                  <Dropdown.Item eventKey="relaxation" onClick={byType}>Relaxation</Dropdown.Item>
                  <Dropdown.Item eventKey="music" onClick={byType}>Music</Dropdown.Item>
                  <Dropdown.Item eventKey="busywork" onClick={byType}>Busywork</Dropdown.Item>
              </DropdownButton>
          <br></br>
          <p id="activity">{type}</p>
        </div>
        </div>
    </div>
  )

}

