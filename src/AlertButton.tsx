function AlertButton() {
    function AlertFunction() {
        alert('This button is working!')
    }
    return (
        <button onClick={AlertFunction}>Click ME</button>
    )
}
export default AlertButton;