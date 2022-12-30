interface Categories {
    commision: boolean;
    foss: boolean;
}

interface Project {
    name: string;
    category: Categories;
    urls: Record<string, string>;
    description: string;
}

function updateYears() {
    let element = document.getElementById("years");

    if (element === null) {
        console.error("Element containing years was not found.");
        return;
    }

    let now = Date.now();
    let birthday = Date.parse("2001-08-04");
    let difference = now - birthday;
    let years = difference / 3.154e+10;  // Thanks Google!
    element.innerText = Math.trunc(years).toString();
}

async function fillProjects() {
    let element = document.getElementById("projects");

    if (element === null) {
        console.error("Element containing projects was not found.");
        return;
    }

    let response = await fetch("/projects.json");

    if (response.status !== 200)
    {
        console.error(`Unable to fetch list of projects: Code ${response.status}.`);
        return;
    }

    let projects: Array<Project> = await response.json();

    for (var project of projects)
    {
        let images = "";

        if (project.category !== undefined)
        {
            if (project.category.commision)
            {
                images += "<img class=\"icon\" src=\"/img/icon/coin.svg\" alt=\"This project is/was a comission.\"></img>";
            }
            if (project.category.foss)
            {
                images += "<img class=\"icon\" src=\"/img/icon/osi.svg\" alt=\"This project is an Open Source project with an OSI Approved licence.\"></img>";
            }
        }

        let rawElement = `<summary>${project.name}${images}</summary><p>${project.description}</p>`;
        if (project.urls !== undefined)
        {
            rawElement += "<p>More Info:</p>\n<ul>";

            for (let urlName in project.urls)
            {
                let urlLink = project.urls[urlName];
                rawElement += `<li><a href="${urlLink}">${urlName}</a></li>`;
            }

            rawElement += "</ul>";
        }

        let newElement = document.createElement("details");
        newElement.innerHTML = rawElement;

        element.insertAdjacentElement("beforeend", newElement);
    }
}

function addEasterEggs() {
    let element = document.getElementById("lemon");

    if (element === null) {
        console.error("Where did the Lemon go?");
        return;
    }

    element.innerText = "🍋";
    element.addEventListener("click", () => {
        let element = document.getElementById("lemon");
        element.innerText = element.innerText == "Lemon" ? "🍋" : "Lemon";
    });
}

function main() {
    updateYears();
    fillProjects();
    addEasterEggs();
}

main();
