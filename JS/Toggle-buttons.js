let buttonCheckInspection = false

function inspectionContact() {
    let info = document.querySelector("#inspection-information");

    if(buttonCheckInspection === false) {
        info.style.height = "92px";

        info.style.visibility = "visible";

        buttonCheckInspection = true;

    } else if(buttonCheckInspection === true) {
        info.style.height = "0px";

        info.style.visibility = "hidden";

        buttonCheckInspection = false;
    }
}

let buttonCheckMaintenance = false

function maintenanceContact() {
    let info = document.querySelector("#maintenance-information");

    if(buttonCheckMaintenance === false) {
        info.style.height = "92px";

        info.style.visibility = "visible";

        buttonCheckMaintenance = true;

    } else if(buttonCheckMaintenance === true) {
        info.style.height = "0px";

        info.style.visibility = "hidden";

        buttonCheckMaintenance = false;

    }
}

let buttonCheckRepair = false

function repairContact() {
    let info = document.querySelector("#repair-information");

    if(buttonCheckRepair === false) {
        info.style.height = "92px";

        info.style.visibility = "visible";

        buttonCheckRepair = true;

    } else if(buttonCheckRepair === true) {
        info.style.height = "0px";

        info.style.visibility = "hidden";

        buttonCheckRepair = false;

    }
}