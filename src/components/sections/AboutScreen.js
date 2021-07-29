import React from 'react'

import { HeroVideo } from '../HeroVideo'
import '../../styles/styles.scss'
import '../../styles/about.scss'


export const About = () => {
	return (
		<>
			{/* <h1>Saludos desde About</h1> */}

			<nav className='nav'>
				<div className='nav-container'>
					<h1 className='nav-logo'>DATA <span>wix</span></h1>

					<label class="nav-label" for="menu" >
						<img className='nav-image' src="menu.svg" alt="Menu icon" />
					</label>
					<input className='nav-input' type="checkbox" name="menu" id="menu" />

					<div class="nav-menu">
						<a className='nav-item' href="http://localhost:3000" >Home</a>
						<a className='nav-item' href="#About2" >Acerca de</a>
						<a className='nav-item' href="#About3" >Contacto</a>
					</div>

				</div>
			</nav>

			<HeroVideo />
			<p>

				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quod illum maxime ducimus. Optio nihil porro quae dignissimos, blanditiis labore, atque perspiciatis facere accusantium nam mollitia asperiores necessitatibus vitae deleniti repellendus fugiat enim eaque nulla voluptates voluptatibus sunt iure rerum! Atque quaerat nihil ducimus, laboriosam maiores beatae sapiente laborum maxime aliquid eum. Numquam harum qui aut aliquam eligendi ipsa, ut dolorum beatae optio quaerat architecto nostrum, quibusdam laborum mollitia unde voluptates totam veritatis vitae ullam porro minima deserunt non at animi. Eum eligendi pariatur provident atque, rerum optio obcaecati deleniti labore autem vero similique earum sapiente qui vitae! Architecto sint deleniti aperiam velit. Fuga, explicabo molestias. Repellat harum laboriosam libero, eligendi necessitatibus quas quasi commodi! Pariatur odit vel eligendi sit, cumque fugiat expedita quos ad. Ratione quos repudiandae vitae eum odio deserunt exercitationem aliquam laudantium alias deleniti dolor obcaecati maiores distinctio, ad mollitia delectus reprehenderit magnam veritatis sunt pariatur facere perferendis doloremque quibusdam! Porro, similique corporis molestias laborum sint omnis, tempore perferendis aliquid modi neque repellendus natus facere? Odio earum commodi unde, qui nihil excepturi! Aliquam eveniet quam, magnam fugiat, voluptates nihil ad commodi maiores impedit atque quis ut. Cumque nesciunt officiis temporibus distinctio autem, unde cupiditate veniam. Nulla unde, saepe excepturi ullam eveniet explicabo similique ab incidunt culpa praesentium doloremque quibusdam in quis maiores cum, at distinctio neque fugiat adipisci consequuntur fugit omnis. Ab omnis veniam reiciendis. Dolore tempore atque tenetur porro nam! Debitis architecto reiciendis distinctio quasi, quia repellat esse repellendus porro ab doloremque soluta vel blanditiis fugit.  Con amor César
			</p>



		</>
	)
}
