function AlertButton() {
    function AlertFunction() {
        alert('Ths button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click Me</button>
    )
}
export default AlertButton;