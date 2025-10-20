let createNoteTitle = document.querySelector("#noteTitle");
let createNoteContent = document.querySelector("#noteBody");
let createNoteBtn = document.querySelector("#saveNoteBtn");
let cancelNoteBtn = document.querySelector("#cancelEditBtn");
let notesContainer = document.querySelector("#notesGrid");
let searchNote = document.querySelector("#searchNote");
let editingNote = null;

// Function to get current date
function getDateTime() {
  let now = new Date();
  const date = now.toLocaleDateString();
  return date;
}

// Create Note Function
function CrreateNote(title, content) {
  let article = document.createElement("article");
  article.classList.add("note-card");
  notesContainer.appendChild(article);

  let h3 = document.createElement("h3");
  h3.classList.add("card-title");
  h3.textContent = title;

  let p = document.createElement("p");
  p.classList.add("card-body");
  p.textContent = content;

  let div = document.createElement("div");
  div.classList.add("card-meta");

  let span = document.createElement("span");
  span.classList.add("card-date");
  span.textContent = getDateTime();

  let divButton = document.createElement("div");
  divButton.classList.add("card-actions");

  // Edit Button
  let EditBtn = document.createElement("button");
  EditBtn.classList.add("btn", "icon", "edit-btn");
  EditBtn.title = "Edit";
  EditBtn.textContent = "✎";

  // Delete Button
  let DeleteBtn = document.createElement("button");
  DeleteBtn.classList.add("btn", "icon", "delete-btn");
  DeleteBtn.title = "Delete";
  DeleteBtn.textContent = "🗑️";

  // Append everything
  article.appendChild(h3);
  article.appendChild(p);
  divButton.appendChild(EditBtn);
  divButton.appendChild(DeleteBtn);
  div.appendChild(span);
  div.appendChild(divButton);
  article.appendChild(div);

  // EDIT BUTTON LOGIC
  EditBtn.addEventListener("click", function () {
    createNoteTitle.value = h3.textContent;
    createNoteContent.value = p.textContent;
    editingNote = article; // store which note is being edited
  });

  // DELETE BUTTON LOGIC
  DeleteBtn.addEventListener("click", function () {
    article.remove();
  });
}

// SAVE BUTTON LOGIC
createNoteBtn.addEventListener("click", function () {
  let title = createNoteTitle.value;
  let content = createNoteContent.value;

  if (title.trim() === "" || content.trim() === "") {
    alert("Both title and content are required to create a note.");
    return;
  }

  if (editingNote) {
    editingNote.querySelector(".card-title").textContent = title;
    editingNote.querySelector(".card-body").textContent = content;
    editingNote.querySelector(".card-date").textContent = getDateTime();
    editingNote = null;
  } else {
    CrreateNote(title, content);
  }

  createNoteTitle.value = "";
  createNoteContent.value = "";
});

// Search Functionality
searchNote.addEventListener("input", function () {
  let searchValue = searchNote.value.toLowerCase();

  let allNotes = document.querySelectorAll(".note-card");

  allNotes.forEach((note) => {
    let title = note.querySelector(".card-title").textContent.toLowerCase();
    let body = note.querySelector(".card-body").textContent.toLowerCase();

    // Check if search text is in title or body
    if (title.includes(searchValue) || body.includes(searchValue)) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});