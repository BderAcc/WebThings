function changeText(elem, defaultText) {
    console.log(elem, defaultText)

    if (elem.innerHTML == defaultText) {
        elem.innerHTML = 'Home';
    } else {
        elem.innerHTML = defaultText;
    }
}