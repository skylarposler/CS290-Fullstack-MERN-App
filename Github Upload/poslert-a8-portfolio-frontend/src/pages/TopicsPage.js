import React from 'react';

function TopicsPage() {
    return(
        <>
        <h2>Web Development Concepts</h2>
        <nav class="local">
            <a href="#AboutWebServers">About Web Servers</a>
            <a href="#FrontendDesign">Frontend Design</a>
            <a href="#OptimizingImages">Optimizing Images</a>
            <a href="#CascadingStylesheets">Cascading Stylesheets</a>
            <a href="#DOMManipulation">DOM Manipulation</a>
        </nav>
        <article id="Intro"><h3>A Brief Introduction</h3>
            <p> Hello there! This app is the culmination of a brillant Web Development class and lots of hard work!
                I'm very proud of it, and I hope you enjoy this app as much as I enjoyed making it!
            </p>
        </article>
        <article id="AboutWebServers"><h3>About Web Servers</h3>
            <p> This page was created using the HTML sample, also known as 
                boilerplate code. My first and last name 
                is used as the title within the code, and as the heading.
                Assignment 1 was also used as a header, initially. The file is called index
                because that is the standard name of the 'home' page of
                most websites. This includes sites hosted on the Apache 
                web server, which is the server that Oregon State University's College of Engineering uses. </p>
            <p> When the page was refreshed in Chrome, The Inspect tool yielded good results.
                The Request Header contained the request URL, the Request
                Method as 'GET', and the Status Code as '200 OK'. It also includes the
                Response Header. This has the Content Type as 'text/html', along
                with the current date and time(Last Modified). Aside from 'index.html', there is also 
                'main.css' and 'main.js', although they are in red text and have no status code - 
                unlike the 'index.html' which is in blue text and displays the Status Code.</p>
            <p> When I saved 'index.html' with my changes, and refreshed the page in the browser,
                it automatically updated to reflect those changes. Pretty neat! </p>
            <p> The biggest changes that I can find after uploading the file to the university server is 
                the Request URL and the Response Header. The Request URL 
                now has the university URL, and the Response Header has much more keys and values; Accept-Ranges: 'Bytes',
                Server Name: 'Apache/2.4.6 (Cent0S)' etc etc. There was none of this 
                information when I was pulling the file directly from my PC. </p>
            <p> The 'favicon.ico' file is also a new addition. This file has the 200 'OK' status code, while the 
                'main.css' and 'main.js' files don't. 'favicon.ico' is from the server, which is why it's displaying a '200' status code.
                These other two files have the 404 status code (they didn't even have a status code until I uploaded to the server),
                meaning that it's recognized as a client error - they don't exist yet. </p>
            <p> The breakdown of my URL is as follows; Schema = 'https://', Subdomain = 'web' and 'engr',
                Host Domain(s) = 'oregonstate.edu', Resource(s) ='~poslert' and 'a#-poslert'. </p>
        </article>

        <article id="FrontendDesign"><h3>Frontend Design</h3>
            <p> Frontend design is the the way that the programmer interacts with the user. It's the visual design and interactive user experience 
            for the webpage. The design must be pleasing to the eye, and the webpage must be friendly and easy use. Frontend designs 
            change with the trends - therefore they must be kept current to keep up with the times and remain relevant to its users. </p>
            <p><strong>The 5 E's of Usability</strong></p>
        <dl>
            <dt>Effective</dt>
            <dd>The user's goal(s) is/are met and are guaranteed accurate results.</dd>
            <dt>Efficient</dt>
            <dd>Ensures the user's task is completed in a timely manner with the least number of steps.</dd>
            <dt>Easy to Navigate</dt>
            <dd>New and returning users will quickly and easily be able to identify and locate their goal - either by clicking or searching.</dd>
            <dt>Error-Free</dt>
            <dd>Avoids accessability and availability issues by learning how users' create common errors - and creating a solution to those errors.</dd>
            <dt>Enjoyable/Engaging</dt>
            <dd>Fits the needs of the audience in content and design - users will be comfortable and return for the overall experience.</dd>
        </dl>
        </article>

        <article id="OptimizingImages"><h3>Optimizing Images</h3>
            <p> The six major specifications of images for the web are Descriptive Files Names, Small File Sizes, Exact Dimensions, Correct File Format, Reduced Resolution,
            and Color Mode. </p>
            <p> The file formats that are most appropriate for photos are JPG and WebP files. These files compress down to small file 
            sizes and remain rectagular. </p>
        </article>

        <article id="CascadingStylesheets"><h3>Cascading Stylesheets</h3>
            <p> The main reason to incorporate stylesheets into websites and apps is because it redefines the components 
            to look and behave a certain way in order to improve readability, legibility, and usability. It also adheres to brand 
            requirements for those that require a certain look and feel to their brand. </p>
            <p> The five ways to incorporate styles are as follows: External CSS, Embedded Styles, Inline Styles, JavaScript Template Literals, and Regular JavaScript. </p>
        </article>

        <article id="DOMManipulation"><h3>DOM Manipulation</h3>
        <p>The DOM - Document Object Model, is an interactive and visually appealing representation of a web page. Using a known broswer (ex. firefox, opera, google chrome, etc),
            you can view the html structure of that web page and create a model made up of a tree of nodes. This can all be rendered in the viewpoint. By accessing this interactive model,
            we can see how the nodes of the tree are related and how they all work together to create the webpage. DOM specification is a programming language neutral - meaning that it can 
            be used in any programming language! </p>
        <p> The nodes in the tree can therefore be altered in what is known as DOM Manipluation. Developers will often update the DOM of a page using JavasScript and Express because 
            it allows for changes in real time - creating, changing, and removing nodes will have an immidiate effect on the web page without having to modify the original HTML document.
            This makes everything much more efficient!
        </p>
        </article>
        </>
    );
}

export default TopicsPage;