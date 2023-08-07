function toggleInactivity(id) {
    const el = document.getElementById(id);
    el.classList.toggle("inactive");
    el.classList.toggle("selected");
}