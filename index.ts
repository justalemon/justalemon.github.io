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

function fillProjects() {
    let element = document.getElementById("projects");

    if (element === null) {
        console.error("Element containing projects was not found.");
        return;
    }

    fetch("/projects.json").then((response) => {
        if (response.status !== 200)
        {
            console.error(`Unable to fetch list of projects: Code ${response.status}.`);
            return;
        }

        return response.json();
    }).then((projects) => {
        if (projects === null)
        {
            return;
        }

        for (let projectIndex in projects)
        {
            let project = projects[projectIndex];

            let rawElement = `<summary>${project.name}</summary><p>${project.description}</p>`;
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
    });
}

function main() {
    updateYears();
    fillProjects();
}

main();
