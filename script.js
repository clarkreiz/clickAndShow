const regions = {
    northwest: "<a id='northwest' href='#'>spb</a><a id='central' href='#'>ladoga</a><a href='#'>murmanks</a>",
    central: "Moscow",
    siberia: "Novosibirsk"
};

const depatylist = {
    northwest: {
        title: "В этом году в республике Коми выбирают губернатора",
        name: "Кандидат от ЛДПР Андрей Никитин",
        description: "Депутат МО ГО «Усинск» Отец троих детей, бывший военный",
        url: {
            vk: null,
            fb: "fb",
            inst: "instagram.com",
        }
    },
    central: {
        title: "В этом году в республике говно выбирают губернатора",
        name: "Кандидат от говна Андрей говнов",
        description: "Депутат МО ГО говно Отец троих говна, бывший говно",
        url: {
            vk: "vk.com",
            fb: "fb.com",
            inst: null,
        }
    },
    siberia: {
        title: "В этом году в республике говно выбирают губернатора",
        name: "Кандидат от говна Андрей говнов",
        description: "Депутат МО ГО говно Отец троих говна, бывший говно",
        url: {
            vk: "vk.com",
            fb: "fb.com",
            inst: "null",
        }
    }
}





map.addEventListener('click', getMap);

function getMap(event) {
    let targetClickId = event.target.id;
    if (typeof regions[targetClickId] !== "undefined") {
        let html = `<p class="city">${regions[targetClickId]}</p>`;
        cities.innerHTML = html;
        cities.style.left = event.pageX + "px";
        cities.style.top = event.pageY + "px";

    }
}

cities.addEventListener('click', showDeputy);

function showDeputy(event) {

    let targetClickId = event.target.id;
    let title = document.querySelector(".depaty-list__title h2");
    let name = document.querySelector(".cards__title");
    let description = document.querySelector(".cards__description");
    let vk = document.querySelector("#vk");
    let fb = document.querySelector("#fb");
    let inst = document.querySelector("#inst");
    vk.style.display = 'block';
    inst.style.display = 'block';



    if (depatylist[targetClickId].url.vk === null) {
        vk.style.display = 'none';
        console.log("vk");
    }

    if (depatylist[targetClickId].url.inst === null) {
        inst.style.display = 'none';
        console.log("inst");
    }




    title.innerText = depatylist[targetClickId].title;
    name.innerText = depatylist[targetClickId].name;
    description.innerText = depatylist[targetClickId].description;
    // vk.href = depatylist[targetClickId].url.vk;
    // fb.href = depatylist[targetClickId].url.fb;
    // inst.href = depatylist[targetClickId].url.inst;






}

