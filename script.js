
// let btn = document.getElementById("btn1");
// btn.addEventListener("click" , ()=>{
//     console.log("kdlajkf");

// })


let showbtn = document.querySelectorAll("#nd");
let input = document.querySelector("input");
let btn = document.getElementById("btn1");
let header = document.querySelector("header");
let main = document.querySelector("main");
let new1 = document.getElementById("new");
let a = document.querySelectorAll("#abc");

async function add() {
    let inputD = input.value;
    let url = `https://openapi.programming-hero.com/api/phones?search=${inputD}`;
    // console.log("jash");
    let data = await fetch(url);
    let d = await data.json();
    // console.log(data);
    let result = document.getElementById("results");
    result.innerHTML = "";
    d.data.map((r) => {
        // console.log(r);
        let div = document.createElement("div");

        div.innerHTML = `<div class="newData" value="${r.slug}">
                <img src="${r.image}" alt="">
                <p class="heading">${r.phone_name}</p>
                <p class="text">There are many variations of passages of available, but the majority have suffered</p>
                <button class="nd-btn" id="nd" onclick="n('${r.slug}')" >Show Details</button>
            </div>`;
        document.getElementById("results").append(div);
    });
    a.forEach((r) => {
        r.addEventListener("click", (w) => {
            async function details1() {
                let name = e.parentElement.children[1].innerText;

                let url = `https://openapi.programming-hero.com/api/phones?search=${name}`;
                // console.log("jash");
                let data1 = await fetch(url);
                let d = await data1.json();
                let namePh = d.data.map((r) => {
                    return r.slug;
                })
                let url2 = `https://openapi.programming-hero.com/api/phone/${namePh}`;

                let data2 = await fetch(url2);
                let dq = await data2.json();
                let div1 = document.createElement("div");
                // console.log("jfaj");
                if (dq.status === true) {

                    div1.innerHTML = `<div class="frant">
                    <img src="${dq.data.image}" alt="" width="200px">
                    <p>${dq.data.name}</p>
                    <p>Brand: ${dq.data.brand}</p>
                    <p> storage: ${dq.data.mainFeatures.storage}
                    </p>
                    <p>
                        displaySize: ${dq.data.mainFeatures.displaySize}
                    </p>
                    <p>
                        chipSet: ${dq.data.mainFeatures.chipSet}
                    </p>
                    <p>
                        memory: ${dq.data.mainFeatures.memory}
                    </p>
                    <p>
                        sensors: ${dq.data.mainFeatures.sensors}
                    </p>
                    <p>
                          Exp. ${dq.data.releaseDate}</p>
                    </p>
                    <button id="cbtn" onclick="clobtn()">Close</button>
        
                </div>`;
                } else {
                    div1.innerHTML = `<div class="frant">
                    <img src="${dq.data.image}" alt="" width="200px">
                    <p>${dq.data.name}</p>
                    <p>Brand: Apple</p>
                    <p> storage: 128GB/256GB/1TB storage, no card slot
                    </p>
                    <p>
                    displaySize: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)
                    </p>
                    <p>
                    chipSet: Apple A15 Bionic (5 nm)
                    </p>
                    <p>
                    memory: 128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM
                    </p>
                    <p>
                    sensors: Face ID,accelerometer,gyro,proximity,compass,barometer
                    </p>
                    <button id="btn3" onclick="clobtn()">Close</button>
                </div>`
                }

                header.style.display = "none";
                main.style.display = "none";
                new1.style.display = "flex";
                new1.style.justifyContent = "center";
                new1.style.alignItems = "center";
                new1.style.flexDirection = "column";
                new1.innerText = "";
                new1.appendChild(div1);

            };
            details1();

        })
    })

}

btn.addEventListener("click", (e) => {
    add();
})

showbtn.forEach((e) => {
    e.addEventListener("click", (w) => {
        async function details() {
            let name = e.parentElement.children[1].innerText;

            let url = `https://openapi.programming-hero.com/api/phones?search=${name}`;
            // console.log("jash");
            let data1 = await fetch(url);
            let d = await data1.json();
            let namePh = d.data.map((r) => {
                return r.slug;
            })
            let url2 = `https://openapi.programming-hero.com/api/phone/${namePh}`;

            let data2 = await fetch(url2);
            let dq = await data2.json();
            let div1 = document.createElement("div");
            console.log(namePh);
            if (dq.status === true) {

                div1.innerHTML = `<div class="frant">
            <img src="${dq.data.image}" alt="" width="200px">
            <p>${dq.data.name}</p>
            <p>Brand: ${dq.data.brand}</p>
            <p> storage: ${dq.data.mainFeatures.storage}
            </p>
            <p>
                displaySize: ${dq.data.mainFeatures.displaySize}
            </p>
            <p>
                chipSet: ${dq.data.mainFeatures.chipSet}
            </p>
            <p>
                memory: ${dq.data.mainFeatures.memory}
            </p>
            <p>
                sensors: ${dq.data.mainFeatures.sensors}
            </p>
            <p>
                  Exp. ${dq.data.releaseDate}</p>
            </p>
            <button id="cbtn" onclick="clobtn()">Close</button>

        </div>`;
            } else {
                div1.innerHTML = `<div class="frant">
            <img src="${dq.data.image}" alt="" width="200px">
            <p>${dq.data.name}</p>
            <p>Brand: Apple</p>
            <p> storage: 128GB/256GB/1TB storage, no card slot
            </p>
            <p>
            displaySize: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)
            </p>
            <p>
            chipSet: Apple A15 Bionic (5 nm)
            </p>
            <p>
            memory: 128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM
            </p>
            <p>
            sensors: Face ID,accelerometer,gyro,proximity,compass,barometer
            </p>
            <button id="btn3" onclick="clobtn()">Close</button>
        </div>`
            }

            header.style.display = "none";
            main.style.display = "none";
            new1.style.display = "flex";
            new1.style.justifyContent = "center";
            new1.style.alignItems = "center";
            new1.style.flexDirection = "column";
            new1.innerText = "";
            new1.appendChild(div1);

        };
        details();

    })
})

function clobtn() {
    header.style.display = "block";
    main.style.display = "block";
    new1.style.display = "none";
}

function n(value) {

    async function d() {
        let inputD = input.value;

        let url = `https://openapi.programming-hero.com/api/phones?search=${inputD}`;
        // console.log("jash");
        let data1 = await fetch(url);
        let d = await data1.json();
        let u2 = "";
        // console.log(d.data);
        let r = d.data.map((p) => {
            return p.slug;
        })
        console.log(value);
        let url2 = `https://openapi.programming-hero.com/api/phone/${value}`;
        // console.log(value);

        let data2 = await fetch(url2);
        let dq = await data2.json();
        let div1 = document.createElement("div");
        if (dq.status === true) {
            // console.log(dq);
            div1.innerHTML = `<div class="frant">
            <img src="${dq.data.image}" alt="" width="200px">
            <p>${dq.data.name}</p>
            <p>Brand: ${dq.data.brand}</p>
            <p> storage: ${dq.data.mainFeatures.storage}
            </p>
            <p>
                displaySize: ${dq.data.mainFeatures.displaySize}
            </p>
            <p>
                chipSet: ${dq.data.mainFeatures.chipSet}
            </p>
            <p>
                memory: ${dq.data.mainFeatures.memory}
            </p>
            <p>
                sensors: ${dq.data.mainFeatures.sensors}
            </p>
            <p>
                  Exp. ${dq.data.releaseDate}</p>
            </p>
            <button id="cbtn" onclick="clobtn()">Close</button>

        </div>`;
        } else {
            console.log(dq);

            div1.innerHTML = `<div class="frant">
            <img src="${dq.data.image}" alt="" width="200px">
            <p>${dq.data.name}</p>
            <p>Brand: Apple</p>
            <p> storage: 128GB/256GB/1TB storage, no card slot
            </p>
            <p>
            displaySize: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)
            </p>
            <p>
            chipSet: Apple A15 Bionic (5 nm)
            </p>
            <p>
            memory: 128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM
            </p>
            <p>
            sensors: Face ID,accelerometer,gyro,proximity,compass,barometer
            </p>
            <button id="btn3" onclick="clobtn()">Close</button>
        </div>`
        }

        header.style.display = "none";
        main.style.display = "none";
        new1.style.display = "flex";
        new1.style.justifyContent = "center";
        new1.style.alignItems = "center";
        new1.style.flexDirection = "column";
        new1.innerText = "";
        new1.appendChild(div1);

    };
    d();
}

function an(data) {
    console.log(data);
}