const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_deff');
    const valueTemp =temp_deff.options [tempSelected.selectedIndex].value;
     // celcius to fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // fahrenheit to celcius
    const fahToCel = (fah) => {
        let celcius = ((fah - 32) * 5 / 9).toFixed(1);
        return celcius;

    }

    if(valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah
        (inputTemp) + "&#176; Fahrenheit";
    }

    else {
        document.getElementById("result").innerHTML = fahToCel
        (inputTemp) + "&#176; celcius";

    }


}