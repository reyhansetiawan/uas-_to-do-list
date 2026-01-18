const taskInput = document.getElementById("taskinput");
const addTaskBtn = document.getElementById("AddTaskbtn");
const taskList = document.getElementById("tasklist");

// Event ketika tombol diklik
addTaskBtn.addEventListener("click", addTask);

// Event tekan Enter
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // Buat elemen li
    const li = document.createElement("li");

    // Teks tugas
    const span = document.createElement("span");
    span.textContent = taskText;

    // Tandai selesai saat diklik
    span.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Kosongkan input
    taskInput.value = "";
}