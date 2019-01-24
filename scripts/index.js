/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

/* global shoppingList, $ */
/* eslint-disable-next-line no-unused-vars */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

console.log(store);