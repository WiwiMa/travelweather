function removeItem() {
    document.getElementById('output_section').setAttribute('style', 'display: none;');
    document.getElementById('input_section').removeAttribute('style');
}

export { removeItem }