console.log("hello this is my first project to javascript");
// when someone add a note the call the corresponding event listner
shownotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    // console.log(notes);
    shownotes();
});
// Function to show the notes
function shownotes() {
    let html = "";
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.forEach(function (element, index) {
        html += `<div class="notecard card mx-3 my-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" Onclick=delNotes(this.id) class="btn btn-primary">Delete notes</button>
        </div>
      </div>`;
    });
    let notesel = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesel.innerHTML = html;
    }
    else {
        notesel.innerHTML = `Nothing to Show Add notes to View  Here and Easy your Life`
    }

}

// Function to Delete the Notes

function delNotes(index) {

    console.log("I am Deleting pls save me", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
// Function to Filter the search
let search = document.getElementById('searchtxt');
search.addEventListener('input', function () {
    let inputvalue = search.value;
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputvalue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
});