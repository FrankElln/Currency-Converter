const usdInput = document.getElementById("usd");
const euroInput = document.getElementById("euro");
const yenInput = document.getElementById("yen");
const poundInput = document.getElementById("pound");
const ausdInput = document.getElementById("ausd");
const candInput = document.getElementById("cand");
const renminbiInput = document.getElementById("renminbi");
const hkdInput = document.getElementById("hkd");
const nzdInput = document.getElementById("nzd");
const wonInput = document.getElementById("won");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = e.target.value;
        
        switch (e.target.name) {
            case "usd":
                euroInput.value = value * 0.84;
                yenInput.value = value * 110.28;
                poundInput.value = value * 0.72;
                ausdInput.value = value * 1.33;
                candInput.value = value * 1.24;
                renminbiInput.value = value * 6.47;
                hkdInput.value = value * 7.76;
                nzdInput.value = value * 1.43;
                wonInput.value = value * 1132.57;
                break;
            case "euro":
                usdInput.value = value * 1.19;
                yenInput.value = value * 131.44;
                poundInput.value = value * 0.86;
                ausdInput.value = value * 1.58;
                candInput.value = value * 1.47;
                renminbiInput.value = value * 7.71;
                hkdInput.value = value * 9.25;
                nzdInput.value = value * 1.70;
                wonInput.value = value * 1350.11;
                break;
            case "yen":
                usdInput.value = value * 0.0091;
                euroInput.value = value * 0.0076;
                poundInput.value = value * 0.0065;
                ausdInput.value = value * 0.012;
                candInput.value = value * 0.011;
                renminbiInput.value = value * 0.059;
                hkdInput.value = value * 0.070;
                nzdInput.value = value * 0.013;
                wonInput.value = value * 10.27;
                break;
            case "pound":
                usdInput.value = value * 1.39;
                euroInput.value = value * 1.17;
                yenInput.value = value * 153.63;
                ausdInput.value = value * 1.85;
                candInput.value = value * 1.72;
                renminbiInput.value = value * 9.01;
                hkdInput.value = value * 10.82;
                nzdInput.value = value * 1.99;
                wonInput.value = value * 1577.55;
                break;
            case "ausd":
                usdInput.value = value * 0.75;
                euroInput.value = value * 0.63;
                yenInput.value = value * 83.16;
                poundInput.value = value * 0.54;
                candInput.value = value * 0.93;
                renminbiInput.value = value * 4.88;
                hkdInput.value = value * 5.86;
                nzdInput.value = value * 1.08;
                wonInput.value = value * 853.89;
                break;
            case "cand":
                usdInput.value = value * 0.81;
                euroInput.value = value * 0.68;
                yenInput.value = value * 89.20;
                poundInput.value = value * 0.58;
                ausdInput.value = value * 1.07;
                renminbiInput.value = value * 5.23;
                hkdInput.value = value * 6.28;
                nzdInput.value = value * 1.16;
                wonInput.value = value * 915.91;
                break;
            case "renminbi":
                usdInput.value = value * 0.15;
                euroInput.value = value * 0.13;
                yenInput.value = value * 17.05;
                poundInput.value = value * 0.11;
                ausdInput.value = value * 0.21;
                candInput.value = value * 0.19;
                hkdInput.value = value * 1.20;
                nzdInput.value = value * 0.22;
                wonInput.value = value * 175.04;
                break;
            case "hkd":
                usdInput.value = value * 0.13;
                euroInput.value = value * 0.11;
                yenInput.value = value * 14.20;
                poundInput.value = value * 0.092;
                ausdInput.value = value * 0.17;
                candInput.value = value * 0.16;
                renminbiInput.value = value * 0.83;
                nzdInput.value = value * 0.18;
                wonInput.value = value * 145.82;
                break;
            case "nzd":
                usdInput.value = value * 0.70;
                euroInput.value = value * 0.59;
                yenInput.value = value * 77.09;
                poundInput.value = value * 0.50;
                ausdInput.value = value * 0.93;
                candInput.value = value * 0.86;
                renminbiInput.value = value * 4.52;
                hkdInput.value = value * 5.43;
                wonInput.value = value * 791.50;
                break;
            case "won":
                usdInput.value = value * 0.00088;
                euroInput.value = value * 0.00074;
                yenInput.value = value * 0.097;
                poundInput.value = value * 0.00063;
                ausdInput.value = value * 0.0012;
                candInput.value = value * 0.0011;
                renminbiInput.value = value * 0.0057;
                hkdInput.value = value * 0.0069;
                nzdInput.value = value * 0.0013;
                break;
        }
    });
}