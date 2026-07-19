function AlertButton() {
    function AlertFunction() {
        alert('This button works!')
    }
    return (
        <button onClick={AlertFunction}>Click me</button>
    )
}
export default AlertButton;