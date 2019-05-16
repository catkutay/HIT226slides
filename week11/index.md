<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
# Lets Code



## Exam preparation
* In your teams grab a whiteboard
* Can you drag page with the HTML, CSS and JS from the exam last year?



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Device testing
You don't always have multiple devices on which to test your site but there are some ways we can do the next best thing.


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Inside of Chrome

You can also simulate devices right inside of Chrome, read through the Google Developers article on Chrome Device Mode

https://developers.google.com/web/tools/chrome-devtools/device-mode/ 


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Mobile testing websites

Upload your page/s to GitHub pages or to Spinetail first and then use the URL to the page when testing.

* [Mobile Test](http://mobiletest.me/)
* [Mobile Phone Emulator](http://www.mobilephoneemulator.com/)
* [Google's Mobile-Friendly Test](https://search.google.com/search-console/mobile-friendly)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Remote debugging on real devices

* [Android](https://developers.google.com/web/tools/chrome-devtools/debug/remote-debugging/remote-debugging?hl=en)
* [iPhone](http://moduscreate.com/enable-remote-web-inspector-in-ios-6/)



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Continuous learning
![Cactus reading a book](https://www.maxpixel.net/static/photo/1x/Cactus-Pot-Book-Reading-Study-Education-Eyes-1059633.jpg)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### So much change
* Web development is constantly changing
* New technologies every year
* New frameworks every year
* New libraries every month


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### I don't use what I started with
* I started as PHP developer
* Then a Java web developer (not javascript)
* Then front end javascript
* Then jQuery AJAX web development
* Then a bunch of PHP frameworks
* Now Node and heaps of javascript frameworks


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Change is good
* It can be daunting to keep on top of the industry
* But it is also really cool
	* Always more to learn
	* Interesting and exciting
	* Lots of fun, passionate community discussions


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### You need to teach yourself
* New languages, frameworks and tools appear all the time
* Most developers teach themselves

[SO Developer Survey](https://insights.stackoverflow.com/survey/2018/#developer-profile-other-types-of-education)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Great ways to learn


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Engage with the community
* Connect with community groups
* Join online discussions
* Participate in [hackathons](https://insights.stackoverflow.com/survey/2018/#developer-profile-why-do-developers-participate-in-hackathons)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Follow blogs and podcasts
* Keeps you up to date with new technologies
* Lots of shiny new stuff to keep you excited about development


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Create your own project
* Working through a project is a great way to build your skills
	* You get to choose what technology you use
	* No business constraints
* There are two types of personal projects
	* Those you finish
	* Those you learn from and throw away
* I have 100s of unfinished projects but I used them to learn new skills which I later applied to work


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Answer questions on Stack Overflow
* Solving problems is the best way to learn
* Look at the questions on stack overflow for something you think you can answer
* Research and answer it. Try to make your answer as strong as possible
* Read the documentation to make sure you're correct
* Write code examples


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Contribute to open source projects
* Working with other peoples code is a great way to learn to write better
* If a library on github doesn't quite do what you want - modify it so it does


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Where to learn from


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Online courses
* [freecodecamp](https://www.freecodecamp.org/)
* [Codecademy](https://www.codecademy.com/)
* [Khan Academy](https://www.khanacademy.org/computing/computer-programming)
* [Sitepoint](https://www.sitepoint.com/)
* [Udemy](https://www.udemy.com)
* And heaps more


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Blogs and news sources
* [Smashing Magazine](https://www.smashingmagazine.com/)
* [CSS Tricks](https://css-tricks.com/)
* [David Walsh](http://davidwalsh.name/)
* [Mozilla hacks](https://hacks.mozilla.org/)
* [Google IO 2018](https://www.youtube.com/user/ChromeDevelopers)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Podcasts
* [Syntax](https://syntax.fm/)
* [Front end happyhour](http://frontendhappyhour.com/)
* [Code pen radio](https://blog.codepen.io/radio/)
* [Big web show](http://5by5.tv/bigwebshow/)
* [Non breaking space show](https://goodstuff.fm/nbsp/)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Fun stuff
* [The daily wtf](https://thedailywtf.com/)
* [Commit strip](http://www.commitstrip.com/en/)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
#### Final resources
* [The front end dev handbook 2018](https://frontendmasters.com/books/front-end-handbook/2018/)
* [DevDocs](http://devdocs.io/)
* [Can I use](https://caniuse.com/)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### The good news
Not many developers are unemployed and looking for work

[SO Developer Survey](https://insights.stackoverflow.com/survey/2018/#employment)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Don't worry, just make cool stuff
* [Just build websites](http://justbuildwebsites.com/)



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Website Criteria
* Download the [marking criteria](https://online.cdu.edu.au/bbcswebdav/pid-2473781-dt-content-rid-9243211_2/xid-9243211_2) and have a look
* I'm happy to field any questions



<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
## Javascript Strings


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### What is a string
* A string is a representation of text
* Written using single quotes or double quotes

```js
'This is a string'
"This is also a string"
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Concatanting strings
You concatanate strings with the plus character

```js
var myString = 'this is a string.';
myString = myString + ' It is now a longer string.';
myString += ' You can also use the plus equals operator';
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Escaping special characters
If I use quotes to delimit a string how can I put a literal quote in my string?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
Escape [special characters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) with a backslash

* \' - Single quote
* \" - Double quote
* \\ - Backslash
* \n - new line

```js
var myString = 'That\'s my \"string\"';
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### HTML Special Characters
* Some characters mean special things in HTML (and URLs)
	* &amp;lt; : <
	* &amp;gt; : >
	* &amp;amp; : &
	* &amp;quot; : "
	* &amp;#39; : '
* Full lists are available online [http://www.degraeve.com/reference/specialcharacters.php](http://www.degraeve.com/reference/specialcharacters.php)


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### String properties and functions
* There are [lots of functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_instances) to help probe and modify your strings


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### How long is my string
String.length

```js
if(inputString.length < 4) {
	throw new Error("Input string length is less than minimum length (4)");
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Get a character out of a string
You can use array notation for string characters

What does this output
```js
var myString = "this is a string";
console.log(myString[3]);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Find a string inside a string
String.indexOf

What does this output?
```js
var catString = "I am going to talk about cats. Not catalogues but cats";
console.log(catString.indexOf('cat');
console.log(catStrring.indexOf('dog');
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Extract a string
String.slice(startIndex, endIndex)
* startIndex - the index to extracting from
* endIndex (optional) - The index to extract up to (not inluded in the extracted string)

What does this output?
```js
var catString = "I am going to talk about cats. Not catalogues but cats";
catString.slice(14, 18);
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Convert case
String.toUpperCase() and String.toLowerCase()

Useful for case insensitive checks
```js
if(input.value.toUpperCase() === name.toUpperCase()) {
	// input value matches name but may not be the same case
}
```


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Your turn
* Write a function that takes a string and converts the first character to upper case
* Can you make it convert the first letter of every sentance?


<!-- .slide: data-background-image="../images/bg-mouse.jpg" -->
### Extra: Regular Expression Black Magic
* Regular expressions are too much to cover now but are extremly powerful.
* Like wildcard strings for programmers
* Take a while to learn but very useful

```js
var endNumber = testString.match(/(\d*)$/); // Get a number from the end of the string

if(input.value.match(/^[\d -]*$/)) {
	// Input value only contains numbers, spaces and hyphens
}
```


