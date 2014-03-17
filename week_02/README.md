# Week 2

## The DOM

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It provides a structured representation of the document and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. Essentially, it connects web pages to scripts or programming languages. More info [where the above was taken from](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference/Introduction).

```html
<html>

  <head>
  	<script src="path/to/javascript/script.js"></script>
  </head>
  
  <body>
  	<p>
  		This is a paragraph. We can easily manipulate the content of this
  		paragraph using javascript.
  	</p>
  	<p>
  		This is another paragraph.
  	</p>
  </body>
  
</html>

```

```javascript

paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);

```

Most of the time manipulating elements by their tag name is far too general for practical purposes. For this reason, JavaScript has a semi-convenient method for targeting elements by their `id`s:

```javascript
document.getElementById("nameOfID");
```

For instance, we could easily change the text on an html page by selecting a specific elements id. This time lets embed the javascript code inside of the html page itself change the text in the `id=bar` paragraph 1 second after the page loads:

```javascript
<html>

  <head>
  	<script type="text/javascript">
      //when the window has loaded
      window.onload = function(){

        setTimeout(function(){
           var bar = document.getElementById("bar");
           bar.innerHTML = "I changed this text 1 second after the page loaded.";
        }, 1000);
       
      }
    </script>
  </head>
  
  <body>
  	<p>
  		This Paragraph doesn't have any id.
  	</p>
  	<p id="foo">
  		This Paragraph doesn't have the id that we are selecting.
  	</p>
  	<p id="bar">
  		This one does, it will be changed.
  	</p>
  </body>
  
</html>
```

JavaScript (in the web browser) gives you access to two extra important global objects through the DOM. They are the:

- [Document](https://developer.mozilla.org/en-US/docs/Web/API/document): represents the web page
- [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window): represent the browser's window.

Together, the HTML Document Object Model and JavaScript make up an Application Programming Interface (API). Here is a list of just a few of the __many__ ways that you can use the DOM to manipulate HTML on a webpage with JavaScript. For a full list of the DOM's properties, methods, and event handlers check out [this documentation](http://www.w3schools.com/jsref/dom_obj_document.asp).

- `document.getElementById(id)`
- `element.getElementsByTagName(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute`
- `element.getAttribute`
- `element.addEventListener`
- `window.content`
- `window.onload`
- `window.scrollTo`

## jQuery

Because manipulating the DOM is actually quite tedious with its arbitrary long and arduous method names and broken down low level API, jQuery was created to make DOM manipulation as easy as "using a nice little library that fixes all of your DOM problems."

jQuery is a library that extends and simplifies the regular JavaScript DOM API and comes with tons of helper helper methods.