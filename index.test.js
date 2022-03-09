test("Check if li item added to the list", () => {
   //get the input
   const myInput = document.querySelector("input");
   //enter the test data
   myInput.value = "coffee";
   //submit the data
   const submitButton = document.querySelector("button");
   submitButton.onclick();
   //verify result
   const result = document.querySelector("li");
   equal(result.textContent, "coffee\u00D7");
    // reset the page so it doesn't affect anything else
   result.textContent = "";
  
});

//  test("Checking if li item has a 'close' button", () => {
//    const liItem = document.querySelector("li");
//    const spanButton = document.querySelector("span");
//    const submitButton = document.querySelector("button");
//    submitButton.onclick();
//    const result = spanButton.classList.contains("close");
//    equal(result, true);
//    result.textContent = "";
//  });

test("Checking an entry marks it as complete", () => {
   const liItem = document.querySelector("li");
   const liClass = document.getElementsByClassName("li.checked");
   const check = document.querySelector("li");
   check.click();
   const result = liItem.classList.contains('checked');
   
   equal(result, true);
   result.textContent = "";
});

test("Check if li item removed from the list", () => {
   // get the input
   const liItem = document.querySelector("li");
   
   //submit the data
   const submitButton = document.querySelector("span");
   submitButton.click();

   //verify result
   const result = document.querySelector("li");
   equal(result.textContent, "");
   // reset the page so it doesn't affect anything else
   result.textContent = "";
});