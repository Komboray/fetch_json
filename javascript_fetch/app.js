//in this application we are going to be using a simple fetch function
//we are fetching from the people.json file as the url
const url = "people.json";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((dataObj)=>{
    console.log(dataObj);

})
.catch((err)=>{
    console.warn(err.message);

})