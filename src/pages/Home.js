import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URL = "http://www.boredapi.com/api/activity/"

export default function Home() {
  const [name, setTitle] = useState("")

  useEffect(() => {
    axios.get(URL)
      .then(response => setTitle(response.data.activity));
  }, []);

  return (
    <div className="hero">
      <h1>We know how hard it is to <br></br> do something out of your comfort zone.</h1>
        <p>With our activity-generator, you don't have to think about it so much. <br></br>
        Just right now, for example, you can have a first proposition of what to do today, or this week-end, if you're up to it!</p>
        <p id="activity">{name}</p>
        <h6>Want to get more ideas?</h6>
        <Link className="btn-more btn btn-outline-secondary" to="/activities" type="button">Show me more!</Link>
    </div>
  );

}
