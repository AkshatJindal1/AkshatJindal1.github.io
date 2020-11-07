import React, { useEffect, useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Microlink from '@microlink/react'
import college from '../../editable-stuff/college.jpg'
import { leadership } from '../../editable-stuff/configurations.json'
import office from '../../editable-stuff/office.jpg'
import office2 from '../../editable-stuff/office2.jpg'
import springfest from '../../editable-stuff/springfest.JPG'
import styled from 'styled-components'

const LinkPreview = styled(Microlink)`
	max-width: 90%;
	border-radius: 0.4;
	width: 21rem;
`

class Leadership extends React.Component {
	render() {
		const layout = []
		return (
			<div
				id='leadership'
				className='jumbotron jumbotron-fluid m-0'
				// style={{ backgroundColor: 'white' }}
			>
				<div className='container container-fluid'>
					<div className='row'>
						<div className='col d-lg-inline align-self-center'>
							<h1 className='display-4 mb-4 text-center'>
								{leadership.heading}
							</h1>
							<br />
							<div className='row'>
								<div className='col d-lg-inline align-self-center'>
									<p className='lead text-left'>
										Throughout my career, I've been
										extremely grateful to have opportunities
										to lead my peers and make an impact on
										the community. In my role as the{' '}
										<b>Software Development Engineer</b> at
										Publicis Sapient , I cultivated a
										culture of leadeship, collaboration, and
										team work through leading projects and
										teams. Prior to that position, I led
										social service intiatives that
										contributed providing healthy life
										lessons to youth community of
										Yekaterinburg, Russia as part of AIESEC
										Russia in my position as the{' '}
										<b>Exchange Participant</b>. Outside of
										these roles, I worked with the cultural
										team of my university to organize the
										annual social and cultural fest, Spring
										Fest through my role as a{' '}
										<b>Core Organizing Team Head</b>.
									</p>
								</div>

								<div className='col d-lg-inline align-self-center'>
									<Carousel>
										<Carousel.Item interval={4000}>
											<img
												className='rounded'
												src={springfest}
												alt='culture'
												width='615'
												height='450'
											/>
										</Carousel.Item>
										<Carousel.Item interval={4000}>
											<img
												className='rounded'
												src={office}
												alt='culture'
												width='615'
												height='450'
											/>
										</Carousel.Item>
										<Carousel.Item interval={4000}>
											<img
												className='rounded'
												src={office2}
												alt='culture'
												width='615'
												height='450'
											/>
										</Carousel.Item>
										<Carousel.Item interval={4000}>
											<img
												className='rounded'
												src={college}
												alt='culture'
												width='615'
												height='450'
											/>
										</Carousel.Item>
									</Carousel>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Leadership
