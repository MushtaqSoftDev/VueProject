The last piece of the application is being able to copy the changes we made to the box and paste that changes. We can see these copy paste by inspect our page and in console section.
# Method 
We will define the copy method to the methods object. Inside this function, define a variable called text.
THis variable will contain the text to copy to the clipboard. At the moment the CSS value is stored in a string.
    let text = `tranform:${this.box.transform};`
            await navigator.clipboard.writeText(text) 
Set this variable to a template string with the following content.
Tranform colon this.box.tranform;
After creating this variable, we can start copying this value to the user's clipboard.
After the varible definition, run a fucntion called navigator.clipboard.writeText.
The navigator object is defined by the browser.
It will contain various pieces of information about the user's browser.