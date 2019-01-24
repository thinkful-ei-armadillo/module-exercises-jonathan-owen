/* eslint-disable no-undef */
'use strict';

/* eslint-disable no-unused-vars */


const Item = (function() {
  
  function validateName (name) {    
    if (!name){
      throw TypeError('Name does not exist.');
    }
  }

  function create(name) {
    return {id: cuid(), name, checked: false};
  }

  return { 
    validateName,
    create
  };
}());