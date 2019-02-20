<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# <span>Skill Up:</span> <span>Code</span>



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## GitHub Pages


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Free hosting for your repository


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### GitHub Settings
Open your GitHub settings by clicking the cog in the top menu bar
![GitHub menu bar showing settings on the left](images/github-settings.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### GitHub Pages Settings
Scroll down to find the GitHub Pages section
![Settings for GitHub Pages before setup](images/github-settings-pages.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Select a branch
Select the branch you want to publish and hit save
![Branch dialog for GitHub pages setup](images/github-settings-pages-dialog.png)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Pick a theme
Select the themes dialog and pick a theme to use. This theme will be used when your markdown is converted to HTML.
![Theme list when setting up GitHub pages](images/github-pages-themes.png)
Markdown is a great way to represent your project documentation.


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### All done!
Pat yourself on the back and enjoy your website.
![Settings for GitHub pages after setup](images/github-settings-pages-complete.png)
It is a good idea to enforce HTTPS unless you have a specific need not to.



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Javascript


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Programming experience?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What is javascript
* Scripting language
	* No need to compile
* Cross platform
	* Windows
	* OSX
	*	&#42;nix


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Most importantly
* Javascript is a *web* scripting language
* We use it to add user interaction to web pages
* Almost all interactive web pages are created using javascript


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### front-end and back-end
* Javascript is almost universal for front-end web programming
* It is also available for back-end web programming (but we're not learning that)

![client server model diagram](https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### It's good to be popular
* Javascript is currently by far the most popular programming language

[Stack Overflow Developer Survey 2017](https://insights.stackoverflow.com/survey/2017#most-popular-technologies)



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Create and link a javascript file
* Download a fresh copy of the HTML Boilerplate from github
	* [https://github.com/HIT223/HTML-Boilerplate](https://github.com/HIT223/HTML-Boilerplate)
* Create a new file called myscript.js in the folder js
	* Javascript file should end with .js and should be kept in a js or scripts folder
* Type alert("javascript is cool"); in the new file
* Add the following to the bottom of the body tag in your html file
```html
<script type="text/javascript" src="myscript.js"> </script>
```
* Open your html page in chrome


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Quick questions
* Why might be put the script at the bottom of the body?
* Could we put it somewhere else?
* How can we control the order they load in?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Let's code!!


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Comments
* Leave a note to yourself (or other developers) without affecting execution
* Great for refrencing code from elsewhere

```js
// I'm a one line comment. I'm useful to provide context or clarity about the code

/**
* I'm a block comment.
* I'm good to explain what a function or block of code will do
**/
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Variables
* Variables are places to save your data
* Javascript is typeless. A variable can hold any type of data

```js
var myVal = 5;
myVal = 'I\'m a string';
```
Use meaningful names for your variables <!-- .element class="fragment" data-fragment="1" -->

Note:
let and const are newer variable keywords. They are supported by newer versions of javascript but we will not be covering them in this course


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Javascript is case sensitive
```js
var myVar = 5;
console.log(myVar); // 5
console.log(myvar); // undefined
```

* *Be consistant in your variable naming*
* camelCase is the most common standard for javascript variables
* CAPTIAL&#95;VARIABLES can indicate constants (variables that _never_ change)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Console
* You can output data to the console using the console object
* Really useful to getting developer output that is invisible to user

```js
console.log('You can only see me in the console');
console.log('log the variable myVar with a message', myVar);
console.error('OMG AN ERROR!!');
console.error(errorObject);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### You try it
* Edit myscript.js that you created earlier and change alert to console.log
* Check the console for the output



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Javascript Arithmetic
* Ready for some maths??


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## + - &amp; /
```js
var addVar = 2 + 3; // ?
var subtractVar = 3 - 2; // ?
var multipleVar = 2 * 3; // ?
var divideVar = 6 / 3; // ?
```

Note:
Answers: 5, 1, 6, 2


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Order of precedence
Just like in high school

1. groups ()
2. multiplication & division
3. addition and subtraction
4. left to right

```js
var myVar = 5 + 2 * (5 - 2) - 1; // ?
```

* 10 <!-- .element class="fragment" data-fragment="1" -->



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Javascript control structures
It's just logic!


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Block statements
Logical groups of code are sorted into blocks using curly brackets
```js
{
	// do some stuff
	oldVal += inputString;
}
```
We use blocks to tell the control structures which code to run



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Conditional Statements
If something is true then do this.
```js
if(input.id === data.id) {
	data.content = input.data;
}
```
inputData will only be assigned if the data ID matches the input ID


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Conditional Statements: Else
Otherwise do this other thing
```js
if(input.id === data.id) {
	data.content = input.data;
} else {
	error = 'Invalid data ID;
}
```
Error will only be set if the IDs do not match


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Conditional Statements: Else if
Otherwise if something else is true then to that
```js
if(input.id === data.id) {
	inputData = input.data;
} else if(user.isAdmin) {
	data.adminContent = input.data;
} else {
	error = 'Input string is invalid';
}
```
If the IDs do not match but the user is an admin it will set the admin content


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Boolean logic
* = Assigns a value
* == Checks if the values are equal (not type safe)
* === Checks if the values are equal and of the same type
* !== Checks if the values are different
* &amp;&amp; Says if that condition is true *AND* this one
* || Says if that condition is true *OR* this one
* ! Negates the condition (makes it the opposite)

Note:
Non-type-safe checks can be confusing and quirky. They are best to avoid while you are starting out. 


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Riddle me this
* if(true)
* if(true === true)
* if(true === false)
* if(true !== false)
* if(true && false)
* if(false || true)
* if(true === 1)
* if(true == 1)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### False and falsy
Javascript evaluates non-boolean values as "truthy" or "falsy".

It can be confusiing so I encourage you to use booleans where possible


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Boolean logic on numbers
* &lt; True if less than
* &gt; True if greater than
* &lt;= True if less than or equal
* &gt;= True if greater than or equal


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Riddle me this
* 5 &lt; 10
* 10 &gt; 10
* 6 &lt;= 10
* 6 &gt;= 6



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Looping
Keep doing something while a condition is true


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### For loop
Declare a value, check a condition and then do something.
```js
for(var i = 0; i < 10; i++) {
	console.log('Iteration', i);
}
```
Usually create an iteration counter, check the counter value and then increment or decrement.


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### While loop
Run the block while a condition is true
```js
var i = 0;
while(i < 10) {
	console.log('Iteration', i);
	i++;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Break out
Stop executing the loop
```js
var i = 0;
while(true) {
	console.log('Iteration', i);
	i++;
	if(i >= 10) {
		break;
	}
}
```



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Your turn
Write some code to print all the even numbers less than 10
