# jQueryCodeAlong - Homework Agenda

In this code along you will be using jQuery to add some cool features to a homework agenda. These features include:

- Fade in for all list items
- List item removal after click
- Center button to center everything on page
- Dark mode button that toggles dark mode on and off

## Setup Instructions

- Clone the repo to codesandbox
- Follow the steps below

---

1. Link your `src/styles.css` file to your `index.html` file by adding a `link` tag to the head of your `index.html` file
   **_TYPE_**

   ```
   <link rel="stylesheet" href="src/styles.css">
   ```

   It's always good practice to test to make sure your css file is linked correctly. Do this by adding background color for everything inside of the body tag.
   **_TYPE_**

   ```
   body {
    background-color: blue;
   }
   ```

   _After confirming it works you can delete the code from above_

   Add the following css to your `src/styles.css` file

   ```
   body {
       font-family: sans-serif;
   }

   .center {
     text-align: center;
     list-style: inside;
   }

   .dark {
     color: white;
     background: black;
   }
   ```

2. Link your `index.js` file to your `index.html` file via a `script` tag at the bottom of your html file right before the closing `body` tag
   **_TYPE_**

   import \$ from 'jQuery'

   ```
   <script src="src/index.js"></script>
   ```

3. For your Do Now, you learned about using a `script` tag that had a `src` attribute that we set to an absolute url for a jQuery library on an online server. We are going to skip that step this time around. CodeSandbox has a dependency feature that we can utilize for this. We already have the jQuery library added as one of our dependencies. All that's left to do now is tell CodeSandox that we will be using the `$` from the jQuery library.

   At the top of your `index.js` file
   **_TYPE_**

```
import $ from 'jQuery'
```

### Coding Instructions

---

1. Create a fade in effect using jQuery's `.hide()` & `.fadeIn()` method
   **_TYPE_**

```
$("li:lt(4)").hide().fadeIn(1500)
```

2. Create a function to remove bullet points when clicked
   **_TYPE_**

```javascript
$("li").on("click", function () {
  $(this).remove();
});
```

3. Add a class that will use your button in the html with the `center` id that's primary function is to center the text. _CSS already exists to make this work in css folder_
   **_TYPE_**

```javascript
$("#center").on("click", function () {
  $("body").addClass("center");
});
```

4. Studying at night can be hard on the eyes. Create a dark mode that uses our button in the html with the `dark` id. _CSS already exists to make this work in the css folder_
   **_TYPE_**

```javascript
$("#dark").on("click", function () {
  $("body").toggleClass("dark");
});
```
