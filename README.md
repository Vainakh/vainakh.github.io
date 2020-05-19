[vainakh.github.io](http://github.com)


## Trivia Game 


# Software-Engineering-Immersive-Remote
## GA SEIR-Pajama-Pants 

### Unit 1 Project

### MVP:

#### The application must meet these requirements:

1. Built with HTML, CSS, JavaScript and jQuery
2. Hosted on github pages
3. Commits to github every day
4. A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.

#### The app must:

* Use AJAX to make a request to an external data source like OMDBapi and insert some of the data retrieved into the DOM
* Implement responsive design (i.e. it should be fully functional on desktop, tablet, mobile, etc)
* Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc

## Brief Overview 

The game uses data from jService website api.
The app is composed of three files.
Logic is create with JavaScript, jQuery.

## Game Navigaton
* Start game, by reading direction displayed in pop up modal.
* In view, top line is where a picked category is being displayed.
* Under the top line, a question text is being displayed.
* The question randomly picked within the particular category using AJAX api method.
* By clicking on category question, a hidden div with an answer to the question becomes active and is being displayed.
* By pressing NEXT button the player can move on to a new question!
