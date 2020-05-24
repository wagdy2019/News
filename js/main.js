
let myData;
let http = new XMLHttpRequest;
let links = document.getElementsByClassName('nav-link');
getData('general');


for(let i =0; i<links.length;i++)
{
    links[i].addEventListener("click",function(e){
        getData(e.target.text);
    })
}



function getData(category)
{
    
http.open('GET',`http://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=f1c0e8920c6c4dcbb5234d9a74b873d5`);
http.send();

http.addEventListener("readystatechange",function(){

    if(http.readyState == 4 && http.status == 200)
    {
        console.log(http.readyState);
        myData = JSON.parse(http.response).articles;
        displayData();
    }

})
}
function displayData()
{
    let box = ``;
    for(let i =0;i<myData.length;i++)
    {
        box +=`<div class='col-md-3 '>
                <div class='border border-primary p-3 m-3'>
                    <img src='${myData[i].urlToImage}' class='w-100'>
                    <h5>${myData[i].title}</h5>
                    <p>${myData[i].description}</p>
                </div>
        
        </div>`
    }
    document.getElementById('rowResult').innerHTML = box;
}



