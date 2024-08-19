// header //
const menu = document.getElementById('menu-icon');
const list = document.getElementById('list');
const close = document.getElementById('close');

close.addEventListener("click", () => {
    list.classList.add('hidden')
})

menu.addEventListener("click", () => {
    list.classList.remove('hidden')
})

// End of header //



// Dark Mode //
const html = document.querySelector("html");
const themBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
    darkMode();
}
else {
    lightMode();
}


themBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("mode") == "light") {
        darkMode();
    }
    else {
        lightMode();
    }
});

function darkMode() {
    html.classList.add("dark");
    themBtn.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("mode", "dark");
}

function lightMode() {
    html.classList.remove("dark");
    themBtn.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("mode", "light");
}
// End Dark Mode //



// Menu // 
const click = document.querySelectorAll("div.button ul li");
const all = document.querySelectorAll(".full");
const fasts = document.querySelectorAll(".fast");
const jooses = document.querySelectorAll(".joos");
const foods = document.querySelectorAll(".food");



click.forEach(tap => {
    tap.addEventListener("click", () => {
        click.forEach(tap => {
            tap.classList.remove("active")
        })
        tap.classList.add('active')

        const tabval = tap.getAttribute('data-taps')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'fast') {
            fasts.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'joos') {
            jooses.forEach(item => {
                item.style.display = 'block'
            })
        }

        else if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }
        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }

    })
})
// End of Menu //




// API //

let fetchData = async () => {
    let html = " "
    let res = await fetch("http://localhost:3000/prouduct")
    let data = await res.json()
    data.forEach((element) => {
        html += `
        <li class="full fast">
                        <div class="box-food">
                            <img src="${element.image}" alt="" class="image-food w-3/4">
                        </div>
                        <div>
                            <div>
                                <h4 class="font-bold text-lg">${element.name}</h4>
                                <div>
                                    <h6 class="text-xs">مشخصات : </h6>
                                    <div>
                                        <span>پردازنده : </span>
                                        <span>${element.brand}</span>
                                    </div>
                                    <div>
                                        <span>گرافیک</span>
                                        <span>4080 super </span>
                                    </div>
                                    <div class="py-2 text-yellow-500">
                                        <span>قیمت : </span>
                                        <span>${element.price} تومان</span>
                                    </div>
                                </div>
                                <div class="flex flex-row">
                                    <div class="btn-buy">
                                        <button class="group-hover:text-black btn-buy "><i
                                                class="fa-solid fa-cart-shopping"></i><span> </span><span>افزودن به
                                                سبد</span></button>
                                    </div>
                                    <div class="group btn-faverid "><i
                                            class="fa-regular fa-heart group-hover:text-black "></i></div>
                                </div>
                            </div>
                        </div>
                    </li>`


            document.querySelector("ul.item").innerHTML=html
    })
}
document.addEventListener("DOMContentLoaded",fetchData)

// API //


// start Animation //

const start = ScrollReveal({
    origin : "top",
    distance : "60px",
    duration : "2500",
    delay : "400"
})

start.reveal(".home__image")
start.reveal(".home__title" , {origin: "bottom"})

start.reveal(".faverite", {origin: "left"})

start.reveal(".card-1", {origin: "left"})
start.reveal(".card-2", {origin: "top"})
start.reveal(".card-3", {origin: "right"})

start.reveal(".matherbord", {origin: "right"})

start.reveal(".review", {origin: "top"})

start.reveal(".footer", {origin: "bottom"})



// End of Animation //






