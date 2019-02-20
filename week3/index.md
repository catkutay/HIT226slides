<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# <span>Skill Up:</span> <span>Code</span>


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Do you have style?
* Open up the hair salon page
	* What does it look like?
	* Attach a stylesheet

```html
	<link rel="stylesheet" href="css/style.css" type="text/css">
```



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## CSS Selectors


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Overview
* A selector directly targets an HTML element
* There are many types
* We'll cover the most commonly used

Note:
A selector is like a query string for your DOM. We use them in CSS to select the elements we want to style


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What do you already know
* What type of selectors can you name?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Element selectors
* Uses the HTML element name
* Selects every instance of this element in the HTML file
* Position in tree is irrelevant
```css
	p {color: #003300;}
```
* All paragraph elements are styled


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Class selectors
* Selects any element that has a relevant class name
* Regardless of the element's position in the tree
```css
	.title {font-size: 130%;}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Combination selectors
* A combination of the element name and a class attribute
* Position in tree is again irrelevant
```html
<h2 class="title">
```
```css
h2.title{font-size: 130%;}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### ID Selectors
* Selects any element that has the relevant ID name
* Regardless of the element's position in the tree
```js
#unique_title{font-size: 130%;}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Combination ID selectors
* A combination of the element name and an ID attribute
* Position in tree is again irrelevant
```html
<h2 id="unique_title">Title</h2>
```
```css
h2#unique_title {font-size: 130%;}
```

Note:
Why is this no more useful than an element selector?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Descendant selectors
* Uses the document tree to isolate and target specific elements


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Descendants continued
* This targets only a elements (anchor elements) that are descendants of p elements in the HTML file
```css
   p a {color: #aacc33; }
 ```
```html
	<!-- Matched -->
	 <p> <a href="#">Here's an image</a> </p> 

	<!-- Not matched -->
	 <h3><a href="#">Here's an image</a></h3>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Descendants continued
* These selectors can go down multiple levels of an HTML document tree
```html
<ul> <li> <a> <img /> </a> </li> </ul>
```

* To style the img element you could use any of these
```css
ul li a img {}
ul li img {}
ul img {}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Descendants continued
* It's considered best practice to minimise the usage of descendants, as a rule of thumb try to limit yourself to three selectors deep
* Use classes to break up deep structures into smaller pieces


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Child selectors
* When you want to target an element directly down the tree from another element
* Use a chevron (>) sign
```html
<p>Here is a <span> red </span> balloon.</p>
```
```css
p > span {color: red; }
```
* Targets only the span element directly inside p elements
* span is the child of p


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Sibling selectors
* When you want to target an element based on it's siblings
	* General sibling selector
	* Use tilde (~)
	* Matches siblings based on the selector it precedes 
* Adjacent sibling selector or next-sibling selector
	* Use +
	* Matches next siblings based the selector it precedes 


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Sibling selectors
```html
<ul>
	<li>List item</li>
	<li>List item</li>
	<li class="test">List item</li>
	<li>List item</li>
	<li>List item</li>
</ul>
```
```css
.test ~ li{} /*Matches fourth and last li*/ 
.test + li{} /*Matches only last li*/ 
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Universal selector
* Written using an asterisk  -  *
* Selects all elements

```css
* {} /* all elements/nodes from html down */

p * {} /* all nodes within a p */
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Combining selectors
* Use a seperator to use multiple selectors
* Select elements from each selector
```
input,
textarea {
	color: #dc143c;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Pseudo selectors
* Special selectors 
* Can select elements by position or state

```css
li:first-child {} /* The first li in the group */

input::active {} /* The currently active input element */
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Eyes on the road
* CSS can't "look back", so you can never target an item based on it's children or on items that come after it


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Eyes on the road
* We can't select the first or second li's based on .test
* We also can not select the ul with a child of .test
```html
<ul>
	<li>List item</li>
	<li>List item</li>
	<li class="test">List item</li>
	<li>List item</li>
	<li>List item</li>
</ul>
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Activity: Eat at the CSS Diner
* Open the [CSS Diner](https://flukeout.github.io/)
* How far can you get?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### CSS Best Practices
 

<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What is best practice
* "Best practice" often comes down to personal opinion.
* "Best practice" can depend on the team environment you are working in.
* "Best practice" can also depend on the applications you have to work with
* Your personal "best practices" will  change radically over time.


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What do you think are good best practices?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Some common practices
* Avoid inline styles
* Avoid header styles
* Minimise number of stylesheets
* Avoid ID selectors


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Activity: Best Practices
* Download the best practice sample file
* Open CSS and HTML
* Also view in browser
* Does it follow best practices?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Our CSS Best Practices


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Avoid duplicate selectors
```css
/* Good */
p {
	margin-left 15px;
	background-color: blue;
}

/* Bad */
p {
	margin-left: 15px;
}
p {
	background-color: blue;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Combine selectors where possible
```css
.example,
.example__element,
.example__another_element {
	display: block;
	color: #1a1a1a;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Avoid complex descendant selectors
```css
/* Good */
.nav__item a {
	color: red;
	text-transform: none;
}

/* Bad */
nav.nav ul li a {
	color: red;
	text-transform: none;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Use a consistant order for selectors
```css
p {
	font-family: arial, helvetica, sans-serif;
	color: #666;
	padding-top: 5px;
}

blockquote: {
	font-family: georgia, serif;
	color: #3b3b3b;
	padding-top: 15px;
	padding-bottom: 15px;
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Group related rules
```css
/* nav.css */
.nav {}
.nav__list {}
.nav__item {}
.nav__item a {}
.nav__item--current a {}

/* header.css */
.header {}
.header__title {}
.header__logo {}
.header__logo_link {}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Activity: How good is the CSS
* Go back to the example
* How well is it written?
* Does it use any of the last 6 tips?
