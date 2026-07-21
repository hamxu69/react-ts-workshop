function AlertButton() {
    function AlertFunction() {
        alert('This button working!')
    }
    return (
        <button onClick={AlertFunction}>Click</button>
    )
}
export default AlertButton;