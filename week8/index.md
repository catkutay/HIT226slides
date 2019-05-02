<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# Lets Code


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Prac 4 Feedback
<div class="column-wrapper">
	<div class="column">
		<img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Fxemoji_u1F601.svg" alt="smiley face" class="column-icon" />
		<ul class="happy-list">
			<li>Some great looking cards</li>
			<li>Some very informative git commit messages made it easy to see what people are doing</li>
			<li>Many people used the lighthouse tool to check accessibility</li>
			<li>Some very clever cards using things like clip-path and javascript</li>
		</ul>
	</div>
	<div class="column">
		<img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Fxemoji_u1F622.svg" alt="sad face" class="column-icon" />
		<ul class="sad-list">
			<li>Looks like a lot of people are still using the web interface to delete and re-upload files.</li>
			<li>Many are not testing with lighthouse</li>
			<li>Only showing content on hover doesn&quot;t work with a keyboard or touchscreen</li>
			<li>Most teams didn&quot;t test their pages on mobile.</li>
		</ul>
	</div>
</div>


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Review: ROT13
```js
function rot13(string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var letters = string.split('');
  var answer = '';
  var len = string.length
  for (i = 0; i !== len; i++) {
    var index = alphabet.indexOf(letters[i]);
    if (index >= 13) {
      index = index - 13;
      answer = answer + alphabet[index];
    } else {
      index = index + 13;
      answer = answer + alphabet[index];;
    }
  }
  console.log(answer);
}

rot13('abcdefghijklmnopqrstuvwxyz')
```



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Debugging


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Before we start
* Open the hairsalon page and attach the CSS file if it is not already
* Download and attach main.js
* What do you think this file is supposed to do?
* The file is broken, follow along with the debugger and see if you can find why


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What is debugging
* Locating and fixing errors in code
* Performed at runtime
	* e.g. in the browser


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### How do we debug
* Chrome developer tools provides us with an _inline debugger_
* We can step through our code, line by line as it actually executes
* There are two main ways to do this


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Debugging from the sources tab
1. If you open up dev tools and go to sources you will find all your js files
2. Open the file you want to debug and find the function you want to troubleshoot
3. Find a line just before where you have a problem and click the line number
4. A blue arrow appears to indicate you have set a *break point*
5. When the code gets to your break point it will pause


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Open the debugger
<video>
	<source data-src="videos/debug-open.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Breakpoint
* Clicking on a line number creates a breakpoint
* When the code at the breakpoint is about to execute the browser will pause and open the deugger
* Lines with breakpoints are indicated with a blue arrow

![blue breakpoint marker](images/debug-breakpoint.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Debug controls
* Play icon resumes normal code execution
* Step over continues to the next line in the current function
* Step into pauses on the first line of the function about to be executed
* Stop out pauses on the next line of the calling (parent) function
* Can you find out what the last two do?

![Debug control icons](images/debug-controls.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Checking values
* You can hover your cursor over a variable to see the value it holds
* The scope pane shows all variables in the current scope
* You can add a variable to watch in the watch pane

![Debug scope name](images/debug-scope.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
<video>
	<source data-src="videos/debug-breakpoint.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Review
* Why is main.js broken?
* Can you fix it?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Accessing the DOM


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Querying Selectors

There are a bunch of ways to get elements from the DOM.

Two really stand out
* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* querySelector() <!-- .element class="fragment fragment-em" data-fragment="1" -->
* querySelectorAll() <!-- .element class="fragment fragment-em" data-fragment="1" -->


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Query selectors
Use CSS selectors to get elements from the DOM

* querySelector() - Get the first matching element
* querySelectorAll() - Get a collection of elements

You can call them from document (the root of the DOM tree) or an element


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
```js
var btn = document
	.querySelector('#submitBtn');
console.log('submit button', btn);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
```js
var inputs = document
	.querySelectorAll('.register-form input');
console.log('registration inputs', inputs);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
<video>
	<source data-src="videos/devtools-query-dom.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Have a play
* Open index.html from hairsalon and type the following into the bottom of the console
	* document.querySelector('thumb')
	* document.querySelectorAll('thumb')
	* document.querySelectorAll('nav li')
	* document.querySelectorAll('nav > li')
	* document.querySelector('#logo')
	* document.querySelectorAll('#logo')


<!-- .slide: class="small-margin" data-background-image="../images/bg-mouse.jpg" -->
### Can you tell what this does?
```html
<form class="register-form">
	<label for="name">Name</label>
	<input id="name" name="name" />
	<label for="idCode">ID Code</label>
	<input id="idCode" name="id" />
</form>
```

```js
var inputs = document.querySelectorAll('.register-form input');
var registrationData = {};
for(var i = 0; i < inputs.length; i++) {
	var inputName = inputs[i].getAttribute('name');
	registrationData[inputName] = inputs[i].value;
}
```



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Classes and javascript
* Classlist lets you add/remove/check classes on elements


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Add a class
```js
document.querySelector('#registerForm')
	.classList.add('focus');
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Remove a class
```js
document.querySelector('#registerForm')
	.classList.remove('focus');
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Check for a class
```js
var registerForm = document.querySelector('#registerForm');
if(registerForm.classList.contains('active')) {
	console.log('Register form is active');
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Toggle a class on or off
```js
document.querySelector('#registerForm')
	.classList.toggle('focus');
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Your turn
* Use classList to hide/show extra text

```js
/**
* Event handler when the read more button is clicked
* @param {Event} evt The click event
**/
function readMoreClicked(evt) {
	evt.preventDefault();
	// Add your code here
}

document.querySelector(;#readMoreBtn', readMoreClicked);
```



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Event Listeners


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
* An event listener is code that runs when a certain event happens
* Common events include
	* An element is clicked
	* An input is changed
	* Text is selected
	* Media is played or stopped


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Add an event listener
* assign event listener by calling `addEventListener` on the element
* Takes two arguments
	* Event to listen for
	* A callback

```js
var button = document.querySelector('#btn');
var btnClicked = function(evt) {
	console.log('Button clicked', evt);
});
button.addEventListener('click', btnClicked);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What's a callback???
* A callback is a function that is passed as a parameter to call later
* They are used to execute code after something happens
* We can pass the function like a variable or pass an anonymous function
	* An anonymous function is not saved anywhere

```js
var button = document.querySelector('#btn');
button.addEventListener('click', function(evt) {
	console.log('Button clicked', evt);
});
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Some events to listen to
* [mouseenter](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter)
* [mouseover](https://developer.mozilla.org/en-US/docs/Web/Events/mouseover)
* [mousemove](https://developer.mozilla.org/en-US/docs/Web/Events/mousemove)
* [mousedown](https://developer.mozilla.org/en-US/docs/Web/Events/mousedown)
* [mouseup](https://developer.mozilla.org/en-US/docs/Web/Events/mouseup)
* [click](https://developer.mozilla.org/en-US/docs/Web/Events/click)
* [wheel](https://developer.mozilla.org/en-US/docs/Web/Events/wheel)
* [mouseleave](https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave)
* [mouseout](https://developer.mozilla.org/en-US/docs/Web/Events/mouseout)
* [select](https://developer.mozilla.org/en-US/docs/Web/Events/select)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Try them out
[Mouse event demo](https://codepen.io/elvey/pen/gzPLxv)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Remove an event listener
To remove an event listener you can call Element.removeEventListener() and pass it the event type and the function you want to remove.

```js
button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Code Challenge
Working with your team, can you make a drag and drop?

```js
/**
* Add drag and drop functionality to an element
* @param {Element} target The element to add drag and drop functions too
* @return {undefined} No return value
**/
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### A couple of gotchas
* Sometimes other actions can execute on events
	* Other event handlers
	* Browser default actions


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Bubbles
* Some types of event &quot;bubble&quot; up the DOM tree
* This is also called Event Propagation
* This means that after an event fires on an element, it fires again on the parent
	* or before if we set them to &quot;capture&quot;
* We can prevent this with Event.stopPropagation()
* Try to only stop propagation when you have to. It can be really useful


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Brower default handlers
* The browser has default actions for some events
* e.g. The browser redirects when a form is submitted or a link is clicked
* To prevent this all Event.preventDefault()


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Research further
* There are lots of different event types including
	* Network events
	* Focus events
	* CSS animation events
	* CSS transition events
	* View events
	* Keyboard events
	* Media events

Have a look at the [event types](https://developer.mozilla.org/en-US/docs/Web/Events) and see what you can do

