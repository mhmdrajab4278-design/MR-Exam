

let questions = null;
let category = [
    {
        "name": "25-26 T1",
        "subject": "English",
        "filter": "school"
    },

    {
        "name": "25-26 T2",
        "subject": "English",
        "filter": "school"
    },

    {
        "name": "24-25 T2",
        "subject": "English",
        "filter": "school"
    },
    {
        "name": "Capitals",
        "subject": "Capitals",
        "filter": "capitals"
    },
    {
        "name": "Animals",
        "subject": "Animals",
        "filter": "animals"
    },
    {
        "name": "History",
        "subject": "History",
        "filter": "history"
    },
    {
        "name": "Logic",
        "subject": "Logic",
        "filter": "logic"
    }
]
const cards = document.getElementById("cards")

async function get_questions(){
    const response = await fetch("questions.json");
    questions = await response.json();
}

// filter

const filter = document.getElementById("filter");
const filters = document.querySelector(".filters");
console.log(filters)

filter.addEventListener("click", event => {
    filters.classList.toggle("filters2");
})


async function start() {
    await get_questions();
    
    // sidebar
    
    const side = document.getElementById("side");
    const sidebtn = document.getElementById("sidebtn");
    const hideside = document.getElementById("hideside");
    
    const squiz = document.getElementById("squiz");
    const quiz = document.getElementById("quiz");
    const lquiz = document.getElementById("lquiz");
    const fexam = document.getElementById("fexam");
    const submit = document.getElementById("submit");
    const cancel = document.getElementById("cancel");
    const next = document.getElementById("next");
    const foot = document.querySelector(".foot");
    const quiz_form = document.getElementById("quiz-form");
    let selected;
    let elementoutside;
    
    cancel.addEventListener("click", event => {
        foot.classList.remove("active-foot");
    })
    
    quiz_form.addEventListener("change", event => {
        selected = event.target;
    })
    
    sidebtn.addEventListener("click", event => {
        side.classList.add("active");
    })
    
    hideside.addEventListener("click", event => {
        side.classList.remove("active")
    })
    
    const select = document.getElementById("select");
    
    function displaycards(category){
        
        category.forEach(element => {
            const card = document.createElement("div");
            const h1 = document.createElement("h1")
            const p1 = document.createElement("p")
            const p2 = document.createElement("p")
            
            h1.textContent = element.name;
            p1.textContent = element.num;
            p2.textContent = element.subject;

            h1.style.fontSize = "25px"
            
            card.appendChild(h1)
            card.appendChild(p1)
            card.appendChild(p2)
            card.classList.add("card");
            
            cards.appendChild(card)
            
            card.addEventListener("click", event => {
                // window.location.href = `index2.html?test=${element.name}`;
                elementoutside = element;
                foot.classList.add("active-foot")
            })

        })}
        
        
    let newcategory;
    
    newcategory = category;
    
    const filter_form = document.getElementById('filter-form');
    const school = document.getElementById("school");
    const geography = document.getElementById("geography");
    const all2 = document.getElementById("all2");
    const f_btns = document.querySelectorAll(".f-btns");
    const animals = document.getElementById("animals");
    const history = document.getElementById("history");
    const logic = document.getElementById("logic");


    all2.addEventListener("click", event => {
        newcategory = category;
        f_btns.forEach(btn => btn.disabled = false);
        all2.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })

    history.addEventListener("click", event => {
        newcategory = category.filter(type => type.filter == "history");
        f_btns.forEach(btn => btn.disabled = false);
        history.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })

    animals.addEventListener("click", event => {
        newcategory = category.filter(type => type.filter == "animals");
        f_btns.forEach(btn => btn.disabled = false);
        animals.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })

    logic.addEventListener("click", event => {
        newcategory = category.filter(type => type.filter == "logic");
        f_btns.forEach(btn => btn.disabled = false);
        logic.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })
    
    school.addEventListener("click", event => {
        newcategory = category.filter(type => type.filter == "school");
        f_btns.forEach(btn => btn.disabled = false);
        school.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })

    geography.addEventListener("click", event => {
        newcategory = category.filter(type => type.filter == "capitals");
        f_btns.forEach(btn => btn.disabled = false);
        geography.disabled = true;
        cards.replaceChildren()
        displaycards(newcategory);
    })
        
    displaycards(newcategory);

    
        /*
        const allcards = document.querySelectorAll(".card")
        
        select.addEventListener("change", event => {
            const color = event.target.value;
            
            if(color == "dodgerblue"){
                document.documentElement.style.setProperty("--primary-color", color)
            }
    
            else if(color == "lightgreen"){
                document.documentElement.style.setProperty("--primary-color", color)
            }
            
            else if(color == "tomato"){
                document.documentElement.style.setProperty("--primary-color", color)
            }
            
            else if(color == "orange"){
                document.documentElement.style.setProperty("--primary-color", color)
            }
            
            window.localStorage.setItem("theme", color);
        })
        
        const savedcolor = localStorage.getItem("theme");
        
        if(savedcolor){
            document.documentElement.style.setProperty("--primary-color", savedcolor)
        }*/
    next.addEventListener("click", event => {
        window.location.href = `index2.html?test=${elementoutside.name}&type=${selected.id}&filter=${newcategory[0].filter}`;
    })
    console.log(elementoutside, selected)
    
    }

start()

/*
<div class="card">
<h1 id="qname">25-25 T1</h1>
<p id="numq">NO. of Questions: 50</p>
<p id="subject">English Test</p>
</div>
*/
