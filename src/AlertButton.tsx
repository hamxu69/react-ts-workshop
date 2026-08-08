function AlertButton() {
    function AlertFunction() {
        alert('Th button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click Me</button>
    )
}
export default AlertButton;