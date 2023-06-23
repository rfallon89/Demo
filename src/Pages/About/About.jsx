import office from '../../Assets/shutter2.jpg'
import {Link} from 'react-router-dom'
import './Styles/About.css'

function About(){
    return(
        <article id='article-container'>
            <h1>About us</h1>
            <p>
                <span id='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, facilis praesentium. <Link id='restore'>Similique earum maiores dolorem</Link> aspernatur suscipit possimus nostrum! Accusamus sapiente et sequi ab earum porro nesciunt alias magnam. Neque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed odit, rem ipsam tempora inventore debitis atque voluptate laudantium corporis a amet iure quia illo labore non. Quaerat, temporibus totam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut officia est perspiciatis aliquam velit quo suscipit, dolore quis dignissimos unde laudantium ad rerum earum nulla consequatur rem. Molestias, a minima.
            </p>
            <img src={office} alt='office'/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius provident inventore beatae. Soluta officia suscipit quisquam ullam temporibus quae sapiente illum accusamus, fuga consequuntur iste, doloremque fugit nobis rem! Rem!
            </p>
            <h3>Lorem ipsum dolor sit amet:</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                <li>Eius provident inventore beatae. Soluta officia suscipit quisquam ullam temporibus quae sapiente illum accusamus</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                
            </ul>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum dolor consequatur dolorum alias perferendis adipisci, officiis tenetur, laboriosam cumque possimus illum repellat rem expedita quisquam corrupti molestiae ullam sed.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed odit, rem ipsam tempora inventore debitis atque voluptate laudantium corporis a amet iure quia illo labore non. Quaerat, temporibus totam?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut officia est perspiciatis aliquam velit quo suscipit, dolore quis dignissimos unde laudantium ad rerum earum nulla consequatur rem. Molestias, a minima.
            </p>
        </article>
    )
}
export default About