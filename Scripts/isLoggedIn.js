"use strict";
// Name : Samuel Abraham, Sandeep Kuamr
// Student id : 100870571 , 100844683
// Date : 14-03-2024
(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    location.href = "contact-list.html";
    }
})();
