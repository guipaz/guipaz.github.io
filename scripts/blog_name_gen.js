$(document).ready(function() {
    console.log("generating name")
    names = ["tiredness", "possibilites", "realities", "abstraction"]
    choice1 = Math.random() * names.length
    choice2 = Math.random() * names.length
    title = "ramblings of " + names[choice1] + " and " + names[choice2]

    $("#blog-title").innerHTML = title
    document.title = title

    console.log(title)
});