function AlertButton() {
    function AlertFunction() {
        alert('This button works!')
    }
    return (
        <button onClick={AlertFunction}>Click</button>
    )
}
export default AlertButton;