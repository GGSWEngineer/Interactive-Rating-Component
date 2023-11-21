# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- ChatGPT

### What I learned

I learned that when you gather "const ratingGroups = document.querySelectorAll(".rating-group");" which is all of the elements that contain the rating-group class, it puts them in a nodelist giving you the option to itirate over them using a forEach, map, filter, or reduce function. 

.rating-group.active circle {
  fill: var(--Orange, #fc7614);
}

.rating-group.active text {
    fill: #fff; /* Color for the text when active */
  }

When the .rating-group has the active class the circle will fill orange, and the text color will fill white. This is pattern will come up later, so its great to have in this project to refer back to.  


### Continued development

This was the first project where I had to use a substantial amount of Javascript. I will continue to focus on how to apply Javascript more in my web development projects. For a lot of the Javascript, I prompted ChatGPT to do this specific feature and it gave me code for it. It wasn't perfect, but after cleaning up the code and testing out the features, we got the code to work out! In the future, I will rely less on ChatGPT and I'll write the Javscript on my own.


## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
