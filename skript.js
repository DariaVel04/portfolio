const btn = document.querySelector(".burger_menu")
const burger_menu = document.querySelector(".burger_menu_bg")
const close_burger = document.querySelector(".burger_close")
const modal = document.querySelector(".modal")
const letstalk_btn = document.querySelector(".letstalk_btn")


function OpenBurger() {
    burger_menu.classList.add("active_burger")
}

function CloseBurger() {
    burger_menu.classList.remove("active_burger")
}

document.body.addEventListener("click", (e)=>{ 
    if (!e.target.classList.contains("burger_menu") && !e.target.classList.contains("burger_menu_bg")) {
        CloseBurger()
    }
})
btn.addEventListener("click", OpenBurger)
close_burger.addEventListener("click", CloseBurger)

function OpenModal() {
    modal.classList.add("active_modal")
}

letstalk_btn.addEventListener("click", OpenModal)

function CloseModal(e) {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("active_modal")
    }
    
}

modal.addEventListener("click", ()=>CloseModal(event))