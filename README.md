# Notare - Notes App

This is the frontend for the Notare App, utilizing API from the [Masonite-Heroku backend.](https://github.com/gadgetgeek/kweb_backend)


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
These were two functions I thought would be fun to add. The random function worked well to 

### Burger Menu and Modal
While the Burger menu was built more or less following the last project, I strove to add more functionality. Firstly I used 

### Git Collaboration
The biggest lessons learned were the complications that arose from collaborating across Git. Dividing up the work seems like a massive productivity hack, but having to put code from different sources together, and pushing and pulling suggested changes across the net led to quite a few merge conflicts and a lot of thrown out code. The higher up the design hierarchy a change is, the more things it breaks.
