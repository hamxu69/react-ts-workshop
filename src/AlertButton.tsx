function AlertButton() {
    function AlertFunction() {
        alert('This button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click</button>
    )
}
export default AlertButton;