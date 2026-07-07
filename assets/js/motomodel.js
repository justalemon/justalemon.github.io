const regions = {
    AA: "USA",
    AZ: "Asia",
    LA: "Latin America",
    MD: "Europe"
}
const types = {
    H: "Portable",
    M: "Mobile"
}
const series = {
    _25: "PRO (LATAM)/CDM (NA)/GM (EU)",
    _65: "EP450"
}
const bands = {
    B: "HF (29.7-36.0 MHz)",
    C: "HF (36.0-42.0 MHz)",
    D: "HF (42.0-50.0 MHz)",
    K: "VHF (146-174 MHz)",
}
const bandOverrides = {
    _25: {
        R: "UHF1 (403-470 MHz)",
        S: "UHF2 (450-512 MHz)"
    },
    _65: {
        Q: "UHF (403-440 MHz)",
        R: "UHF (438-470 MHz)",
        S: "UHF (465-495 MHz)"
    }
}
const powerLevels = {
    D: "4-5w",
    H: "1-25w",
    K: "25-40w"
}
// TODO: EU GM Packages
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
    AA: "Conventional (ROW)/Conventional 5 Tone (EU)",
    AN: "Conventional MDC",
    CK: "MPT",
    DU: "LTR",
    DP: "PassPort and LTR",
    PW: "1.5ppm"
}
// TODO: EU GM Features
const features = {
    _1: "4F",
    _2: "64F (Mobile)/16 Channels (Portable)",
    _4: "64 Channels",
    _5: "128F",
    _8: "160F"
}

function parseDetail(details, value, prefix, overrides) {
    if (!overrides) {
        overrides = {};
    }

    details = { ...details, ...overrides };

    const key = prefix ? ("_" + value) : value;
    const detail = details[key];
    return detail ?? `Unknown (${value})`
}

function buildCommonName(region, series, package) {
    // PRO/CDM
    if (series == "25") {
        if (region == "LA") {
            if (package == "A" || package == "C") {
                return "PRO3100";
            } else if (package == "D") {
                return "PRO5100";
            } else if (package == "F") {
                return "PRO7100";
            }
        } else if (region == "AA") {
            if (package == "A" || package == "C") {
                return "CDM750";
            } else if (package == "D") {
                return "CDM1250";
            } else if (package == "F") {
                return "CDM1550";
            }
        } else if (region == "MD") {
            if (package == "A" || package == "C") {
                return "GM340";
            } else if (package == "D") {
                return "GM360";
            } else if (package == "F") {
                return "GM380";
            }
        }
    }
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

    const region = parseDetail(regions, model.substring(0, 2), false);
    const type = parseDetail(types, model.substring(2, 3), false);
    const serie = parseDetail(series, model.substring(3, 5), true);
    const band = parseDetail(bands, model.substring(5, 6), false, bandOverrides["_" + model.substring(3, 5)]);
    const power = parseDetail(powerLevels, model.substring(6, 7), false);
    const package = parseDetail(packages, model.substring(7, 8), false);
    const spacing = parseDetail(spacings, model.substring(8, 9), true);
    const protocol = parseDetail(protocols, model.substring(9, 11), false);
    const feature = parseDetail(features, model.substring(11, 12), true);
    const revision = model.substring(12, 13);
    const modelPackage = model.substring(13, 14);

    const commonName = buildCommonName(model.substring(0, 2), model.substring(3, 5), model.substring(7, 8)) ?? serie;
    const name = "Motorola " + commonName + " " + band + " " + power;

    details.innerText = `${name}\n\nRegion: ${region}\nType/Form Factor: ${type}\nSeries: ${serie}\nBand: ${band}\nPower: ${power}\nPhysical Package: ${package}\nChannel Spacing: ${spacing}\nProtocol: ${protocol}\nFeature Level: ${feature}\nModel Revision: ${revision}\nModel Package: ${modelPackage}`;
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
