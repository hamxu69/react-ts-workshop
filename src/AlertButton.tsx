function AlertButton() {
    function AlertFunction() {
        alert('Thi button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click Me</button>
    )
}
export default AlertButton;