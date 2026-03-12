const form = document.getElementById("contactForm");
const inputs = form.querySelectorAll("input, textarea, select");
const statusMsg = document.getElementById("status");
const clearBtn = document.getElementById("clearBtn");
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const STORAGE_KEY = "formData";
textarea.addEventListener("input", () => {
  counter.textContent = textarea.value.length + " / 200";
});
function saveForm() {
  let data = {};
  inputs.forEach((input) => {
    if (input.value !== "") {
      data[input.name] = input.value;
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  statusMsg.textContent = "Saved ✓ " + time;
}
function restoreForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return;
  const data = JSON.parse(savedData);
  inputs.forEach((input) => {
    if (data[input.name]) {
      input.value = data[input.name];
    }
  });
  statusMsg.textContent = "Saved data restored";
}
inputs.forEach((input) => {
  input.addEventListener("input", saveForm);
  input.addEventListener("change", saveForm);
});
clearBtn.addEventListener("click", () => {
  if (confirm("Clear saved data?")) {
    localStorage.removeItem(STORAGE_KEY);
    inputs.forEach((i) => (i.value = ""));
    counter.textContent = "0 / 200";
    statusMsg.textContent = "Saved data cleared";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusMsg.textContent = "Form submitted successfully ✓";
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  counter.textContent = "0 / 200";
});
window.onload = restoreForm;
