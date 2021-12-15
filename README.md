# Notare - Notes App

This is the frontend for the Notare App, utilizing API from the [Masonite-Heroku backend.](https://github.com/elikyaB/seirp-p4-backend2d)


## Technologies Used
- HTML5
- SASS
- React JS
- Netlify

## Router Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Index | `/` | GET all notes |
| Create | `/new` | POST creates a new product |
| Show | `/note/:id` | GET for one note, PUT updates a product, DELETE destroys a product |

## Components
- HeaderNav - hosts the title banner responsive logic
- Header - shows link to form and additional functions - get random note and delete all notes
- BurgerMenu - pop-up navigation pane for mobile
- Main - displays pages
- Note - holds note information

## Pages
- AllNotes - show all the notes
- SingleNote - shows an additional note with delete, update, and return to AllNotes button
- Form - shows form to create new note, along with a LoremIpsum autofill button

## Tree
```
App
 |_____ HeaderNav
          |______ Header / BurgerMenu
 |_____ Main
          |______ AllNotes
          |______ SingleNote
          |______ Form
```

## User Stories
- As a user, I can see a list of all my notes when I visit the page.
- As a user, I can click on one of my notes and have it take me to its individual page.
- As a user, I can create a new note and see it on the main page instantly.
- As a user, I can update a note in case I made a typo or want to change an image.
- As a user, I can autofill the form for a note in case I'm lazy.
- As a user, I can delete a note so I can keep my list relevant.
- As a user, I can delete all notes to start fresh.
- As a mobile user, I can use the burger menu to quickly scroll through my notes.

## Development Notes

## Random and Delere!
These were two functions I thought would be fun to add. The random function took a bit of tinkering with the string of window.location.href, but it was a simple matter to solve when I stopped trying to use map() as the proverbial hammer. Delere was a sort of straightforward implementation that used the list of notes that lived in state to loop through and delete them all individually.

## Lorem Ipsum Form Autofill
Definitely something I cooked up in order to test out spacing of notes more easily. In the process I also learned a few tricks regarding programmatically editing a form's state.

### Burger Menu and Modal
While the Burger menu was built more or less following the last project, I strove to add more functionality. Firstly I iterated through all notes in order to add shortcuts to any individual note for a mobile user. Then I had the thought of adding a modal popup on hover to be able to preview a note before clicking on it. That's when I discovered that there is a weird css convention preventing one from using an overflow-x: visible with an overflow-y: anything else besides auto, and vice-versa. There were some work arounds online such as [this one](https://css-tricks.com/popping-hidden-overflow/), but after tinkering with it for awhile with no luck, I figured no mobile user is going to be able to cursor hover over the burger menu anytime soon and called it a day.
