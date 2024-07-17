const api = "https://randomuser.me/api/";

async function name() {
        let data = await fetch(api);
        let ac = await data.json();
        
        let x = ac.results[0];
        let a = document.querySelector(".nam");    
        let b = document.querySelector(".one");
        b.addEventListene("mouseover", () =>{
            a.innerHTML = x.name.title;
        });
    }
    name()
