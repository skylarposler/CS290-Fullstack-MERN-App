import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/first-pc-build.jpg',
        thumbnail: 'images/first-pc-build.jpg',
        description: `The first PC I ever built (the tower component was running late) - 2020.`,
        originalHeight: '450px',
    },

    {
        original: 'images/first-code.jpg',
        thumbnail: 'images/first-code.jpg',
        description: `My first coding assignment in the Post Bacc program! - 2022`,
        originalHeight: '300px', 
    },

    {
        original: 'images/cs162-code.jpg',
        thumbnail: 'images/cs162-code.jpg',
        description: `This was my most satisfying completed code for CS 162. - 2022`,
        originalHeight: '450px', 
    },

    {
        original: 'images/gaiman-audiobook.jpg',
        thumbnail: 'images/gaiman-audiobook.jpg',
        description: `I'm a huge fan of audiobooks, and this was the first one I listened to in 2023. - 2023`,
        originalHeight: '450px', 
    },

    {
        original: 'images/new-tarot-deck.jpg',
        thumbnail: 'images/new-tarot-deck.jpg',
        description: `I collect tarot decks, this is the newest addition. - 2023`,
        originalHeight: '450px', 
    },

    {
        original: 'images/swingtacular-2019.jpg',
        thumbnail: 'images/swingtacular-2019.jpg',
        description: `Taken at the Swingtacular 2019 West Coast Swing Dance Convention, I'm the one in the middle with the pink hair. - 2019`,
        originalHeight: '450px', 
    },

    {
        original: 'images/trooper-2021.jpg',
        thumbnail: 'images/trooper-2021.jpg',
        description: `This is my horse, Trooper. He's Gypsy Vanner cross and a year and a half old here. - 2022`,
        originalHeight: '450px', 
    },

    {
        original: 'images/seattle-skyline-2022.jpg',
        thumbnail: 'images/seattle-skyline-2022.jpg',
        description: `The city of Seattle, taken from the top floor of the Amazon building, August 2022 - inspired the move. - 2022`,
        originalHeight: '450px', 
    },

    {
        original: 'images/seattle-move-2023.jpg',
        thumbnail: 'images/seattle-move-2023.jpg',
        description: `Our full U-Haul for our January 2023 move to the Seattle area.`,
        originalHeight: '450px', 
    },

    {
        original: 'images/hobbiton-2019.jpg',
        thumbnail: 'images/hobbiton-2019.jpg',
        description: `Took a trip to New Zealand, as an avid Lord of the Rings fan, I had to stop by the Shire! Fun fact: the background
        photo on this website is a personal photo that I took of Bagend! Incredible experience! - 2019`,
        originalHeight: '450px', 
    },
]


function GalleryPage() {
    return (
        <>

            <h2>Personal Gallery</h2>
            <p>Some of my hobbies and favorite things these past couple years!</p>

            <article class="gallery">
                <ImageGallery items={images} />
            </article>

        </>
    );
}

export default GalleryPage;