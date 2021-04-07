# jQueryCodeAlong - Homework Agenda

In this code along you will be using jQuery to add some cool features to a homework agenda. These features include:
- Fade in for all list items
- List item removal after click
- Center button to center everything on page
- Dark mode button that toggles dark mode on and off

## Setup Instructions

- Clone the repo to codesandbox 
- Follow the steps below

## Code Along

### Setup Instructions
___
1. Link your `src/styles.css` file to your `index.html` file by adding a `link` tag to the head of your `index.html` file
   __*TYPE*__
   ```   
   <link rel="stylesheet" href="src/styles.css">
    ```
   It's always good practice to test to make sure your css file is linked correctly. Do this by adding background color for everything inside of the body tag.
    __*TYPE*__
   ```   
   body {
    background-color: blue;
   }
    ```
    *After confirming it works you can delete the code from above*
    
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
1. Link your `index.js` file to your `index.html` file via a `script` tag at the bottom of your html file right before the closing `body` tag
       __*TYPE*__
   ```   
   <script src="src/index.js"></script>
    ```   

1. For your Do Now, you learned about using a `script` tag that had a `src` attribute that we set to an absolute url for a jQuery library on an online server. We are going to skip that step this time around. CodeSandbox has a dependency feature that we can utilize for this. We already have the jQuery library added as one of our dependencies. All that's left to do now is tell CodeSandox that we will be using the `$` from the jQuery library.

    At the top of your `index.js` file 
    __*TYPE*__
   ```   
    import $ from 'jQuery'   
   ```

### Coding Instructions
___

1. Create a fade in effect using jQuery's `.hide()` & `.fadeIn()` method
__*TYPE*__ 
```
$("li:lt(4)").hide().fadeIn(1500)
```

1. Create a function to remove bullet points when clicked
__*TYPE*__ 
``` javascript
    $("li").on("click", function () {
      $(this).remove();
    }); 
```
1. Add a class that will use your button in the html with the `center` id that's primary function is to center the text. *CSS already exists to make this work in css folder*
__*TYPE*__ 
``` javascript
$("#center").on("click", function () {
  $("body").addClass("center");
});
```

1. Studying at night can be hard on the eyes. Create a dark mode that uses our button in the html with the `dark` id. *CSS already exists to make this work in the css folder*
__*TYPE*__ 
``` javascript
$("#dark").on("click", function () {
  $("body").toggleClass("dark");
});
```
