import Carousel from "./Components/Carousel"
import office from '../../Assets/shutter3.jpg'
import { Link } from "react-router-dom"
import './Styles/Home.css'

function Home(){
    return(
        <div id="home-container">
            <Carousel/>
            <section id="section1" >
                <div>
                    <h3>Lorem ipsum dolor sit, amet consectetur</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero commodi cupiditate fugiat neque vero hic, fugit voluptas error, praesentium nesciunt consequuntur odio magnam odit totam quis saepe obcaecati voluptatibus? 
                    </p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    <Link id='link'to="/about-us">Learn more</Link>
                </div>
                <img src={office} alt="office"/>
            </section>
            <section id="section2">
                <div>
                    <h3>Lorem ipsum dolor sit, amet consectetur</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero commodi cupiditate fugiat neque vero hic, fugit voluptas error, praesentium nesciunt consequuntur odio magnam odit totam quis saepe obcaecati voluptatibus? 
                    </p>
                    <button id="login">Log in</button>
                </div>
            </section>
            <section id='section3'>
                    <h3>Lorem ipsum dolor sit, amet consectetur</h3>
                    <h4>Lorem ipsum dolor sit</h4>
                    <div>
                        <p id='bold'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia velit doloribus repudiandae. Quam nostrum sunt exercitationem pariatur omnis! Ad qui quod voluptates aperiam magnam commodi rem nihil quisquam. Fuga!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex aliquam quae. Iste itaque cumque quod, ipsam molestiae quae. Sit magnam illo at tempora corporis, ea dolor soluta nesciunt explicabo.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia velit doloribus repudiandae. Quam nostrum sunt exercitationem pariatur omnis! Ad qui quod voluptates aperiam magnam commodi rem nihil quisquam. Fuga!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex aliquam quae. Iste itaque cumque quod, ipsam molestiae quae. Sit magnam illo at tempora corporis, ea dolor soluta nesciunt explicabo.
                        </p> 
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia velit doloribus repudiandae. Quam nostrum sunt exercitationem pariatur omnis! Ad qui quod voluptates aperiam magnam commodi rem nihil quisquam. Fuga!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos rerum vel sunt quo consectetur ex ullam pariatur veniam hic eveniet, aspernatur modi, ipsa incidunt, similique quasi sapiente expedita tenetur deleniti!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex aliquam quae. Iste itaque cumque quod, ipsam molestiae quae. Sit magnam illo at tempora corporis, ea dolor soluta nesciunt explicabo.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, fuga tenetur iusto hic ex suscipit tempora deserunt adipisci quas eaque maiores reprehenderit ipsam sapiente illo. Excepturi odit nemo quis. Eius?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, obcaecati? Earum error labore amet! Libero, recusandae fuga voluptate pariatur quia necessitatibus alias cupiditate aliquam obcaecati, commodi et! Fuga, corrupti tempora.
                        </p>
                    </div>
                    <Link id='link' to="/contact-us">Contact Us</Link>
            </section>
        </div>
    )
}
export default Home