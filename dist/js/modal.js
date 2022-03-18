const $modal = document.querySelector(".modal");
const $activateModal = document.querySelectorAll(".activate-modal")

let activeModal = false;

$activateModal.forEach((element) => {
    element.addEventListener("click", () => {
        if (activeModal === false) {
            $modal.classList.add("activate-modal");
            activeModal = true;
        } else {
            $modal.classList.remove("activate-modal");
            activeModal = false;
        }
    })
});