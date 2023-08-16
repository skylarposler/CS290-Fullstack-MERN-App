import React from 'react';

function HomePage() {
    return(
        <>
        <h2>Welcome to my WebDev final Portfolio!</h2>
        <article id="Intro"><h3>A Brief Introduction</h3>
            <p> Hello there! Welcome to my full stack MERN app! My name is Skye, and I'm a student at Oregon State University, enrolled in
                the Computer Science Post-Bacc program! This portfolio is the culmination of a brillant Web Development class and lost of hard work!
                I'm very proud of it, and I hope you enjoy leafing through it as much as I enjoyed making it!
            </p>
            <p> Throughout this course, we learned about HTML, JavaScript and CSS. Once those topics were mastered, we moved onto more in-depth work.
                We built our foundations on express and nodemon, and then moved to react. The icing on the cake was learning how to utilize Mongoose and MongoDB, and thus
                modifying our react app into a full stack MERN (Mongoose, Express, React, Node.js) web application!
            </p>
            <p>
                Those are the big points, but there were cosmetic factors that came into play as well- Google fonts, the React icon gallery, and simple optimization of 
                images. These smaller additions really helped bring out the individuality of each unique application. I believe they are just as important as the points mentioned above
                because ever since the beginning of the course, we were taught that a pleasing design can make or break an application!
            </p>
        </article>
        </>
    );
}

export default HomePage;