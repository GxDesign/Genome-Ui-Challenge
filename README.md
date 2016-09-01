# Genome UI Development Challenge

## The Challenge

Prompt: "This repository contains a basic HTML site with an image and some copy. Your mission, if you choose to accept it, is to add some form of navigation structure on to the page so that a user can easily toggle between the four major copy sections on the page. The navigation pattern and design are completely up to you - take this challenge and run with it!"

(The original challenge can be found in the directory "The_Assignment")



#The Result


Everyone uses bootstrap, and everyone uses hamburger menus for mobile... too easy! I wanted to really accept this as a challenge and have some fun with it. The result is The Cupcake Factory, a fun one page site with animations and original scripts. I also really like the Genome bot, so I wanted to create a fun environment for him to continue baking cupcakes while Plum is busy at work. 

## Animations/Styling:

I used a combination of CSS3 keyframe animations and jQuery triggers. The cupcake and conveyor belt are entirely CSS. I created a separate Sass file and source map to keep all of my new code separate. 

## Accesibility:

I wanted to make the navigation very clear on mobile and try something different from the standard hidden "hamburger" menu. The cupcake becomes the main menu, but as you scroll down on mobile, a mini icon menu slides up into view, allowing you to scroll to different sections or to the very top. I also added a smooth scrolling script for a smooth transition from section to section. Images with text also have the appropriate 'alt' text included. 

## Responsiveness:

Aside from having a mobile menu, I also removed the intro animation which could be tricky on mobile and instead added a mobile logo below the cupcake. I used media queries with 5 breakpoints, although being away for the holidays I wasnt able to test on large desktop devices. I also made a couple of lines target firefox specifically to fix some layout errors. 

## Pagination:

This part was a lot of fun. I wanted the Cake Flavors section to be an actual list of flavors without changing the original text. So, I created an original script that takes the original Cake Flavors sample data and paginates it into lists of flavors. It first splits the text into flavors by sentences, then it announces the total number of flavors, and then it converts the split into an array of arrays, each being a set of ten flavors/sentences. Then, it creates pagination controls and assigns each control to a flavor set which, when clicked on, iterates over each list item and changes the text to the new flavor set. Although they are separate sets, a simple bit of math allows each flavor to retain its index number in the overall list of flavors. There are ten list items, but any number of sentences can be broken into sets of ten and paginated. If there is a remainder, that is also a set with the unfilled list items being empty (I added two more flavors/sentences to test this, 41 & 42).

## Areas for Improvement:

This was my first time working with Sass beyond one or two uses of variables. As I explored the Sass docs, I was amazed at how useful it can be for making code DRY. I made use of variables, mixins and extends, but given more time I would have liked to explore mapping and other Sass tools. Also, I wasn't sure on the best ways to test a local site for mobile responsiveness and cross browser compatibility and at times it felt like shooting in the dark. I'm confident these are things I can quickly improve on. 



