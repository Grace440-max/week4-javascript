//task1

const opportunityForm = document.querySelector("#opportunity-form");

const opportunityName = document.querySelector("#opportunity-name");
const opportunityType = document.querySelector("#opportunity-type");
const applicationDeadline = document.querySelector("#application-deadline");
const nextAction = document.querySelector("#next-action");

const opportunityList = document.querySelector("#opportunity-list");
const emptyMessage = document.querySelector("#empty-message");
const errorMessage = document.querySelector("#error-message");

const totalOpportunities = document.querySelector("#total-opportunities");
const preparingOpportunities = document.querySelector("#preparing-opportunities");
const submittedOpportunities = document.querySelector("#submitted-opportunities");


//task2

const sampleOpportunities = [
    {
        id: 1,
        name: "Tech Sisters Cohort",
        type: "Training",
        deadline: "2026-11-20",
        nextAction: "Complete the application form",
        status: "Preparing"
    },

    {
        id: 2,
        name: "AHTS Fellowship",
        type: "Scholarship",
        deadline: "2026-12-10",
        nextAction: "Prepare my CV",
        status: "Interested"
    },

    {
        id: 3,
        name: "Dental Internship",
        type: "Internship",
        deadline: "2026-12-15",
        nextAction: "Prepare my motivation letter",
        status: "Submitted"
    }
];

let opportunities =
    JSON.parse(localStorage.getItem("opportunities")) || sampleOpportunities;


//task3

function displayOpportunities() {

    opportunityList.innerHTML = "";


    if (opportunities.length === 0) {
        emptyMessage.hidden = false;
    } else {
        emptyMessage.hidden = true;
    }



    opportunities.forEach(function(opportunity) {

        const card = document.createElement("div");
        card.classList.add("opportunity-card");


        const heading = document.createElement("h3");
        heading.textContent = opportunity.name;

      

        const type = document.createElement("p");
        type.textContent = "Type: " + opportunity.type;

   

        const deadline = document.createElement("p");
        deadline.textContent = "Deadline: " + opportunity.deadline;

    

        const action = document.createElement("p");
        action.textContent = "Next action: " + opportunity.nextAction;


        const status = document.createElement("p");
        status.textContent = "Status: " + opportunity.status;

      

        const statusSelect = document.createElement("select");

        const statuses = ["Interested", "Preparing", "Submitted"];

        statuses.forEach(function(item) {

            const option = document.createElement("option");

            option.value = item;
            option.textContent = item;

            statusSelect.appendChild(option);

        });

        statusSelect.value = opportunity.status;
        statusSelect.dataset.id = opportunity.id;

      

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.dataset.id = opportunity.id;


        card.appendChild(heading);
        card.appendChild(type);
        card.appendChild(deadline);
        card.appendChild(action);
        card.appendChild(status);
        card.appendChild(statusSelect);
        card.appendChild(deleteButton);

       

        opportunityList.appendChild(card);

    });

}

//task4

function saveOpportunities() {

    localStorage.setItem("opportunities", JSON.stringify(opportunities));

}


//task5

opportunityForm.addEventListener("submit", function(event) {

  

    event.preventDefault();

    // Read form values

    const name = opportunityName.value.trim();
    const type = opportunityType.value;
    const deadline = applicationDeadline.value;
    const action = nextAction.value.trim();


    if (name === "" || type === "" || deadline === "" || action === "") {

        errorMessage.textContent = "Please fill in all required fields.";
        errorMessage.style.color = "red";

        return;
    }

  

    const newOpportunity = {

        id: Date.now(),
        name: name,
        type: type,
        deadline: deadline,
        nextAction: action,
        status: "Interested"

    };

    opportunities.push(newOpportunity);

    saveOpportunities();
    displayOpportunities();
    updateProgress();

    opportunityForm.reset();
    errorMessage.textContent = "";

});


//task7
opportunityList.addEventListener("change", function(event) {

    if (event.target.tagName === "SELECT") {

        const opportunityId = event.target.dataset.id;

        const opportunity = opportunities.find(function(item) {

            return item.id == opportunityId;

        });

        if (opportunity) {

            opportunity.status = event.target.value;

            saveOpportunities();
            displayOpportunities();
            updateProgress();

        }

    }

});


//tak7

opportunityList.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        const opportunityId = event.target.dataset.id;

        opportunities = opportunities.filter(function(item) {

            return item.id != opportunityId;

        });

        saveOpportunities();
        displayOpportunities();
        updateProgress();

    }

});


//task8

function updateProgress() {


    totalOpportunities.textContent = opportunities.length;



    const preparing = opportunities.filter(function(item) {

        return item.status === "Preparing";

    });

   

    const submitted = opportunities.filter(function(item) {

        return item.status === "Submitted";

    });

    preparingOpportunities.textContent = preparing.length;
    submittedOpportunities.textContent = submitted.length;

}


//task9

displayOpportunities();

updateProgress();
