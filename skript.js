const btn = document.querySelector(".burger_menu")
const burger_menu = document.querySelector(".burger_menu_bg")
const close_burger = document.querySelector(".burger_close")
const modal = document.querySelector(".modal")
const letstalk_btn = document.querySelector(".letstalk_btn")
const letstalk_form = document.querySelector(".letstalk_form")
const contact_form = document.querySelector(".contact_input_wrapper")
const success_message = document.querySelector(".success_message")
const letstalk_success = document.querySelector(".letstalk_success")


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

const TOKEN = "8590905766:AAH9xXca2p33j-xT9Y0lF0K59JbVJfu85O8"
const CHAT_ID = -1003379896939
letstalk_form.addEventListener("submit", async (e)=>{
    e.preventDefault() 
    const email_input = document.querySelector(".email_input").value.trim()
    console.log(email_input);
    
    const desc_input = document.querySelector(".desc_input").value.trim()
    function escapeMd(s) {
        return s.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
    }
    const text = `📩 *Новая обратная связь*\n` +
                   `*Desc:* ${escapeMd(desc_input)}\n` +
                   (email_input ? `*Email:* ${escapeMd(email_input)}\n` : "");
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    try {
        const resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "MarkdownV2"
          })
        });
        const data = await resp.json()
        if (data.ok) {
            letstalk_success.classList.add("letstalk_success_act")
            setTimeout(()=>{
            letstalk_success.classList.remove("letstalk_success_act")
            }, 3000)
        } else{
            letstalk_success.innerHTML = `
                    <p>Error! Try again later</p>
            `
            letstalk_success.classList.add("letstalk_success_act")
            setTimeout(()=>{
            letstalk_success.classList.remove("letstalk_success_act")
            }, 3000)
        }
    } catch (error) {
            letstalk_success.innerHTML = `
                    <p>Error! Try again later</p>
            `
            letstalk_success.classList.add("letstalk_success_act")
            setTimeout(()=>{
            letstalk_success.classList.remove("letstalk_success_act")
            }, 3000)
    }

})


contact_form.addEventListener("submit", async (e)=>{
    e.preventDefault() 
    const contact_input_name = document.querySelector(".contact_input_name").value.trim()
    const contact_input_email = document.querySelector(".contact_input_name").value.trim()
    const contact_input_desc = document.querySelector(".contact_input_desc").value.trim()
    function escapeMd(s) {
        return s.replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
    }
    const text = `📩 *Новая обратная связь*\n` +
                   `*Имя:* ${escapeMd(contact_input_name)}\n` +
                   (contact_input_email ? `*Email:* ${escapeMd(contact_input_email)}\n` : "") +
                   `*Сообщение:*\n${escapeMd(contact_input_desc)}`;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    try {
        const resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "MarkdownV2"
          })
        });
        const data = await resp.json()
        if (data.ok) {
            success_message.classList.add("success_active")
            setTimeout(()=>{
            success_message.classList.remove("success_active")
            }, 3000)
        } else{
            success_message.innerHTML = `
                    <p>Error! Try again later</p>
            `
            success_message.classList.add("letstalk_success_act")
            setTimeout(()=>{
            success_message.classList.remove("letstalk_success_act")
            }, 3000)
        }
    } catch (error) {
            success_message.innerHTML = `
                    <p>Error! Try again later</p>
            `
            success_message.classList.add("letstalk_success_act")
            setTimeout(()=>{
            success_message.classList.remove("letstalk_success_act")
            }, 3000)
    }

})