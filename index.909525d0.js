(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),document.querySelector(".js-speaker-form").addEventListener("submit",(e=>{e.preventDefault(),new FormData(e.currentTarget).forEach(((e,o)=>console.log(`${o}: ${e}`)))}));
//# sourceMappingURL=index.909525d0.js.map
