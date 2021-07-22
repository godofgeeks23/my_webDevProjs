// Starting to Learn how to use APIs in JavaScript

// fetch() can both retrieve(get()) and send(post())
// fetch() is a asynchronous function
// json - javascript object Notation 

// the image file is fetched, then look at the resolved promise and convert it into a blob
fetch('rainbow.jpg').then(response => {
    console.log(response);
    return response.blob();
}).then(blob => {
    console.log(blob);
    // document.getElementById('rainbow').src = blob;  // the blob object is not in the format in which it is expected by the dom element
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
});
