//JavaScript: Copy a string to the clipboard

const onClickCopyText = () => {
    const inputEle = document.getElementById('input-box')
    inputEle.select();
    document.execCommand("copy")

    document.getElementById('text-area').innerHTML = "copay data: " + inputEle.value;
}