import '../Styles/SubmitFeedback.css'
import accept from '../Assets/accept.png'
function SubmitFeedback(){

    return(
        <div id="feedback-container">
            <img src={accept}/>
            <h2>Your message has been sent</h2>
            <p>We will be in contact with you within 24 hours.</p>
        </div>
    )

}

export default SubmitFeedback