revealElements
==============

A little jQuery plugin for out of dom elements

In folder base/ you can see the main idea of this little project,
that I have translated into jQuery plugin.

Usage
=====

Basic for show all dom elements with reveal class

  ```javascript
  $.revealElements();
  ```
  
More specific, you can choose class 

  ```javascript
  $.revealElements({
    revealClass: '.reveal',
  	wrapperEl: 'body',
  	state: false,
  	overlayIndex: 8,
  	overlayColor: '#000'
  });
  ```
