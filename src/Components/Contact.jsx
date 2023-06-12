import Form from "./Form"
import contact from '../Assets/Img_Contact.png'
import '../Styles/Contact.css'
import {useState} from 'react'
import SubmitFeedback from "./SubmitFeedback"

function Contact(){
    const[response,setResponse] = useState(false)

    return(
        <div id="contact-container">
            <div id='section-container'>
                <section>
                    <h1>Contact us</h1>
                    <p id="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet pariatur asperiores facere veniam, et quisquam distinctio dolorem aliquid eum reprehenderit nesciunt temporibus aspernatur quam error esse quod</p>
                    {response
                    ?<SubmitFeedback/>
                    :<Form setResponse={setResponse}/>
                    }
                </section>
                <div id="image-container">
                <img src={contact} alt="company logo"/>
                </div>
            </div>
        </div>
    )
}
export default Contact