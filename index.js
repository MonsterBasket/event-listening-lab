(function addingEventListener() {
    //makes absolutely no sense to do this in a function
    document.getElementById('button').addEventListener('click', clicked);
    document.querySelectorAll('body div')[1].addEventListener('click', clicked);
})();

function clicked(event){
    switch(event.target.innerText){
    case "1\n2\n3\n4\n5":
        alert('I was clicked');
        break;
    case "2\n3\n4\n5":
        alert('Did you already click me?');
        break;
    case "3\n4\n5":
        alert('I was clicked in a bad way');
        break;
    case "4\n5":
        alert("I don't ever want to be clicked like that again");
        break;
    case "5":
        alert('mmmmm, click me again ;)');
        break;
    default:
        alert('okay, so what if I was clicked?')
        }
}