import React from 'react'

export default function About() {
  return (
    <div>
      <h1>Who are we?</h1>
      <div id="row">
        <div className="column column-one">
          <h2>Story</h2>
          <p>As a French immigrant who has initially moved in a foreign country for a job, not knowing anybody really, I found it quite difficult during my first months
            in a new place to find new friends other than my colleagues, and to broaden my horizons. What to do? With whom?
            Or even just by myself?</p>
          <p>If I had had this activity generator 2 years ago, I would've spend much less time wondering what to do
            over the week-end, and probably would be able to play the guitar, know how to go mushroom picking safely
            and I would've knitted sweaters for my whole family by now. 
          </p>
          <p>So here I am, bringing this activity generator to you, who wants to try new things, with or without friends
            (or just random people, that's a good way to make friends).</p>
        </div>
        <div className="column column-two">
          {/* note: I really wanted to add an image here, but I have tried many solutions and none of them worked.
          I'm not sure what is the problem, but I was just unable to insert a picture/image here... */}
          <img src="src\marion.png" alt="marion"/>  
          <h5>Marion Roussel</h5>
          <p>Yep, that's me.</p>
        </div>
      </div>
    </div>
  )
}