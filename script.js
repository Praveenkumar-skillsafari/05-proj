// get Elements
let input = document.getElementById("input-1");
let addButton = document.getElementById("add-btn");
let listParent = document.getElementById("list-parent");
let listParent2 = document.getElementById("li-parent2");

// click add btn
addButton.addEventListener("click", () => {
  let value = input.value;
  input.value = "";

  // create elements
  let li = document.createElement("li");
  let checkInput = document.createElement("input");
  checkInput.type = "checkbox";

  let label = document.createElement("label");
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";

  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";

  //set position
  listParent.appendChild(li);
  li.textContent = value;

  li.prepend(checkInput);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // add style
  deleteBtn.setAttribute("id", "dlt-btn");

  // click delete btn
  deleteBtn.addEventListener("click", () => {
    listParent.removeChild(li);
  });

  // click edit btn
  editBtn.addEventListener("click", () => {
    let oldVal = li.childNodes[1];

    editInput = document.createElement("input");
    editInput.type = "text";
    let editVal = editInput.value;

    // replace
    li.replaceChild(editInput, oldVal);
  });

  // completed section
  // click checkbox btn
  checkInput.addEventListener("click", () => {
    if (checkInput.checked) {
      listParent2.appendChild(li);
      li.style.textDecoration = "line-through";
    } else {
      listParent.appendChild(li);
      li.style.textDecoration = "none";
    }
    editBtn.addEventListener("click", () => {
      if (checkInput.checked) {
        li.replaceChild(editInput, oldVal1);
        li.editVal.style.textDecoration = "line-through";
      }
    });

    deleteBtn.addEventListener("click", () => {
      listParent2.removeChild(li);
    });
  });
});
