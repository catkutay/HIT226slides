<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# Lets Code



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Assessment requirements
* Make sure to read the assessment criteria
* If there is a group assessment
	* Everyone *must* submit a link to the group work
* So far most of the submissions I've checked for milestone 2 do not have the team component
	* Please upload your group links by the end of the weekend and I will mark it
* If you don't read the requirements in the workplace you don't get work



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## GitHub vs GitHub Pages
* GitHub is a Git repository
* GitHub Pages is static web hosting


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
* Git is a source repository (see week 1)
* A place to store your source code
* Tracks code changes
* You *MUST* use this for your milestone assessments
* You *MUST* submit a link to your repository


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
* GitHub Pages is web hosting
* Similar to spinetail



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Exam preparation
* In your teams grab a whiteboard
* Can you drag page with the HTML, CSS and JS from the exam last year?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Editing the DOM
* Open up the hair salon page and follow along with the console prompt


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Modifying attributions
You can read and set the properties of an element using dot notation

```js
var nameInput = document.querySelector('input[name="fname"]');
if(nameInput.value.toUpperCase === 'MATT') {
	nameInput.value = 'Elvey';
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
You can access most attributes using dot notation

```js
var myInput = document.createElement('input');
myInput.id = 'nameInput';
myInput.className = 'fancy-input';
myInput.type = 'text';
myInput.required = true;
myInput.maxlength = '50';
document.body.appendChild(myInput);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Modify the contents

innerHTML lets us set the HTML inside an element

```js
document.querySelector('section:first-child').innerHTML = 'hello';

document.querySelector('.hero').innerHTML
	= '<h3>Extra Bits</h3><p>There are lots of cool extra bits you can do with javascript</p>';
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Insert or move elements

Node.appendChild() will add an element to its children. If the element exists elsewhere it will be moved

```js
var newsletter = document.querySelector('.newsletter');
document.querySelector('.hero').appendChild(newsletter);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Remove an element
Node.removeChild will remove an element from a node

```js
var newsletter = document.querySelector('.newsletter');
newsletter.parentElement.removeChild(newsletter);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Create a new element
You can always create a new element using document.createElement

```js
var myNewDiv = document.createElement('div');
myNewDiv.innerHTML = '<h3>Cool stuff</h3><p>There is lots of cool stuff here but the best thing is that it is new!</p>';
document.querySelector('.hero').appendChild(myNewDiv);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Your turn
* Download tour.html
* Attach the javascript and css to the hair salon page
* Edit the javascript according to the comments



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Finishing up


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Make a checklist
* Create a checklist of things you need to deliver
* Before handing your project over go through your checklist
* Is there anything you forgot to double check?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Example checklist
* Is your spelling and grammar correct
* Does your website validate
* Does it adhere to best practices
* Make sure there are no broken links
* Do all images work?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Have a finishing meeting
* Get together and discuss what you need to do
* Is anything missing?
* Has everyone finished their part?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Review your documentation
You might not look at your project again for a while. But what if you have to pick it up in a year?

Ensure your documentation tells you
* Where do you find resources?
* Who do you contact for problems?
* What guidelines does the project follow?
* Does the project have any dependencies?
	* e.g. external resources


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Walk through the hosted website
* Sometimes things change when you deploy to the server
* Walk through your site and make sure it works
* Do this with your checklist
* Test on multiple devices


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Iterate so your product is ready to use
* Try and design and develop your MVPs so they are ready to go
* Test your MVP, design a new one and develop it
* You can do this forever but you can also stop any time


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Learn from the experience
* What lessons have you learned
* What went well?
* What didn't?
* What would you do the same or differenly
