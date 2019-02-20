<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# Lets Code



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Marking guidelines
* Read the guidelines
	* If there are 15 marks for making it responsive - make sure you at least try
* Test your work before submitting
	* Does it validate?
	* How does it work when you resize the screen


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Marking guidelines
* Please provided a hosted link to the files. It's really annoying to clone your repository just to see what it looks like
* If you attach the files I can fix mistakes and still see your work


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Marking guidelines
* Don't make me think



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## General tips


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### No deprecated elements
* Use HTML for semantics and CSS for style

```html
<b>This is the wrong way to do bold</b>
<br>
<u>This is the wrong way to underline</u>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Only underline links

```html
<a class="underline">I look just like a link</a>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Put alt text in images
* An empty string does not count

```html
<img src="cat.jpg" alt="" />
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Do not use ID in CSS
* Use class instead. It is reusable

```css
#idElem {
	// bad
}

.class-elem {
	// good
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" data-transition="slide-in fade-out" -->
### Indent your HTML and CSS so it is easy to read
* I'll be happier when I mark and your employer won't get angry when they review your code

```html
<div>
<div>sometext</div>
<p>othertext</p>
<div>
<p>more text</p>
</div>
</div>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" data-transition="fade-in slide-out" -->
### Indent your HTML and CSS so it is easy to read
* I'll be happier when I mark and your employer won't get angry when they review your code

```html
<div>
	<div>sometext</div>
	<p>othertext</p>
	<div>
		<p>more text</p>
	</div>
</div>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Start with the smallest when going responsive
* Ensures your page will fit every screen size
* Use min-width in your media queries

```
@media(max-width: 800px) {
	// Try and fit everything into a smaller space
}

@media(min-width: 800px) {
	// Stretch out and use all the extra room
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## KeEP aN eYE on CASES
* Windows is not case sensitive
* Most web servers are
* Make sure you use the right case in filenames
* style.css != style.CSS



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
## MVP


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Not Most Valuable Player

![MVP Award](https://upload.wikimedia.org/wikipedia/commons/a/a2/Tarik_Cohen_Celebration_Bowl_Offensive_MVP_Award.jpg)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Minimum Viable Product
![Minimum Viable Product](https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/From_minimum_viable_product_to_more_complex_product.png/800px-From_minimum_viable_product_to_more_complex_product.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Build and test your website in pieces
* Don't build everything at once
* Build enough to test an idea with your users
* If you test lots of little bits you can quickly identify what works and what doesn't


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What is an MVP
* The fastest product you can develop to get meaningful user feedback
* Additional features are developed only after testing the core functionality
* What you learn from your MVP guides further product development


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Leave off anything not required
Only include what is absolutely necessecary to get user feedback without upsetting users

Leave off anything not critical
* Admin functions
* Fancy navigation
* Account management


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### LeanUX: How to create an MVP
1. What is the most important thing to learn first?
2. What is the least amount of work to learn that?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Your turn
* Read the section Creating an MVP 
* What questions should you ask?
* Can you answer these for your websites?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### How I develop an MPV
* List _all_ the functionality you can think of
* Sort it into categories of importance
* Look at the most important category
	* What do you absolutely need for people to try it out


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Be brutal
Just because something isn't MVP doesn't mean it will not get done

If you are only going to make the MVP then stop, is it worth investing any time into?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Examples of an MVP
* Landing page - just the front page to test engagement
* Wizard of oz - looks like the real thing but the back-end is fake
* Prototype - A quick mock-up of the real user interaction


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### My stories
* A successful prototype
* A not-so-successful trial


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Another look
<iframe width="560" height="315" src="https://www.youtube.com/embed/jHyU54GhfGs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
