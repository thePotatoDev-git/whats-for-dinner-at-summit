# What's for Dinner at Summit?
An app to help choose what to eat for dinner. Choose your budget and then choose which option you prefer until it boils down to one choice!

**Link to project:** https://dinneratsummit.netlify.app/

![Dinner app gif](https://i.imgur.com/YMRcZCh.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

For this project, I used vanilla HTML, CSS, and JavaScript. First, I made a simple design using CSS. With JavaScript, I created arrays for three different budgets and filled them with restaurant options. Upon choosing a budget, another array is filled with the restaurant options in that budget range. Two boxes are filled with two choices from the restaurant options, and go head-to-head. The user chooses which of the two options they prefer, and the "losing" option gets replaced with another option. This goes on until there is a single remaining restaurant left. And boom, there you have it! Your dinner is chosen for the night.

## Lessons Learned: 

This was one of my first projects I built after learning JavaScript. It was quite a challenge for me because I hadn't understood all the quirks and tricks I could do with JavaScript. For a while, I couldn't figure out how to remove certain options after they've "lost" in a head-to-head. Eventually I figured out a solution by using the .pop() and .shift() methods. It was a lightbulb moment for me, and I realized there's so much more you could do with JavaScript.
