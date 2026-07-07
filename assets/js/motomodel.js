const regions = {
    AA: "USA",
    LA: "Latin America"
}
const types = {
    H: "Portable",
    M: "Mobile"
}
const series = {
    _25: "PRO (LATAM)/CDM (NA)",
    _65: "EP450"
}
const bands = {
    B: "HF (25.7-36.0 MHz)",
    C: "HF (36.0-42.0 MHz)",
    D: "HF (42.0-50.0 MHz)",
    K: "VHF (146-174 MHz)",
    Q: "UHF (403-440 MHz)",
    R: "UHF (438-470 MHz)",
    S: "UHF (465-495 MHz)"
}
const powerLevels = {
    D: "4-5w",
    H: "1-25w",
    K: "25-40w"
}
const packages = {
    A: "No Screen, No Keyboard",
    C: "No Display, Basic Keyboard (Mobile)",
    D: "1 Line Screen, Limited Keyboard",
    F: "1 Line Screen, Standard Keyboard",
    H: "Full Display",
    N: "4 Line Screen, Improved Keyboard"
}
const spacings = {
    _9: "Programmable"
}
const protocols = {
    AA: "Conventional",
    DU: "LTR"
}
const features = {
    _2: "16 Channels",
    _4: "64 Channels"
}

function decodeModel(model, div) {
    if (typeof(model) !== "string") {
        alert("Model is not a string!");
        return;
    }

    if (model.length !== 14) {
        alert(`Expected 14 character model, got ${model.length}`);
        return;
    }

    const region = regions[model.substring(0, 2)] ?? `Unknown (${model.substring(0, 2)})`;
    const type = types[model.substring(2, 3)] ?? `Unknown (${model.substring(2, 3)})`;
    const serie = series["_" + model.substring(3, 5)] ?? `Unknown (${model.substring(3, 5)})`;
    const band = bands[model.substring(5, 6)] ?? `Unknown (${model.substring(5, 6)})`;
    const power = powerLevels[model.substring(6, 7)] ?? `Unknown (${model.substring(6, 7)})`;
    const package = packages[model.substring(7, 8)] ?? `Unknown (${model.substring(7, 8)})`;
    const spacing = spacings["_" + model.substring(8, 9)] ?? `Unknown (${model.substring(8, 9)})`;
    const protocol = protocols[model.substring(9, 11)] ?? `Unknown (${model.substring(9, 11)})`;
    const feature = features["_" + model.substring(11, 12)] ?? `Unknown (${model.substring(11, 12)})`;
    const revision = model.substring(12, 13);
    const modelPackage = model.substring(13, 14);

    details.innerText = `Region: ${region}\nType/Form Factor: ${type}\nSeries: ${serie}\nBand: ${band}\nPower: ${power}\nPhysical Package: ${package}\nChannel Spacing: ${spacing}\nProtocol: ${protocol}\nFeature Level: ${feature}\nModel Revision: ${revision}\nModel Package: ${modelPackage}`;
}

function addEvents() {
    const button = document.getElementById("decode");
    if (button === null) {
        alert("Decode Button is missing!");
        return;
    }

    const model = document.getElementById("model");
    if (model === null) {
        alert("Model Input Field is missing!");
        return;
    }

    const details = document.getElementById("details");
    if (details === null) {
        alert("Details Div is missing!");
        return;
    }

    button.addEventListener("click", () => {
        decodeModel(model.value, details);
    });
}
document.addEventListener("DOMContentLoaded", addEvents);
