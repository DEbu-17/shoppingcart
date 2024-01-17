
const Checkout = () => {
    function okButton(){
        document.getElementsByClassName("checkOutDiv")[0].style.display = "none";
    }
    return <div className="checkOutDiv">
        <p>Item have been checked out successfully!</p>
        <button className="ok-btn" onClick={okButton}>ok</button>
    </div>
}

export default Checkout;