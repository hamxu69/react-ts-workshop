function AlertButton() {
    function AlertFunction() {
        alert('T button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click Me</button>
    )
}
export default AlertButton;