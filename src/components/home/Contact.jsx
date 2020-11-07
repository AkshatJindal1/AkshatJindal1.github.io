import React, { Component } from 'react'
import {
	contactDescription,
	contactHeading,
} from '../../editable-stuff/configurations.json'

class Contact extends React.Component {
	render() {
		return (
			<div
				id='contact'
				className='jumbotron jumbotron-fluid bg-transparent m-0'
			>
				<h1 className='display-4 mb-4 text-center'>{contactHeading}</h1>
				<center>
					<div className=' d-right col-5 p-0 d-lg-block p-0 ml-5 mr-5 mb-0 mt-5'>
						<p className='lead'>
							{contactDescription}
							<a
								href='mailto:akshat.jindal.iitkgp@gmail.com'
								style={{ color: '#606060' }}
							>
								here!
							</a>
						</p>
					</div>
				</center>
				<center>
					<aside className='four columns footer-widgets'>
						<div className='widget widget_contact'>
							<h4>Address and Phone</h4>
							<p className='address'>
								Akshat Jindal
								<br />
								Bangalore, India <br />
							</p>
						</div>
					</aside>
				</center>
				{/* <center>
					<div className='col-5'>
						<form
							action='https://script.google.com/macros/s/AKfycbyb6tXBdQp6OCHtzntQYE7ZRBvQrrQEeDeiJigGlLekboHZZFc/exec'
							method='post'
							id='contactForm'
							name='contactForm'
							class='contact-form'
						>
							<fieldset>
								<div>
									<label htmlFor='contactName'>
										Name <span className='required'>*</span>
									</label>
									<input
										type='text'
										size={35}
										id='contactName'
										name='contactName'
									/>
								</div>
								<div>
									<label htmlFor='contactEmail'>
										Email{' '}
										<span className='required'>*</span>
									</label>
									<input
										type='text'
										size={35}
										id='contactEmail'
										name='contactEmail'
									/>
								</div>
								<div>
									<label htmlFor='contactSubject'>
										Subject
									</label>
									<input
										type='text'
										size={35}
										id='contactSubject'
										name='contactSubject'
									/>
								</div>
								<div>
									<label htmlFor='contactMessage'>
										Message{' '}
										<span className='required'>*</span>
									</label>
									<textarea
										cols={50}
										rows={15}
										id='contactMessage'
										name='contactMessage'
										defaultValue={''}
									/>
								</div>
								<div>
									<button className='submit btn btn-outline-dark btn-lg'>
										Submit
									</button>
									<span id='image-loader'>
										<img alt='' src='images/loader.gif' />
									</span>
								</div>
							</fieldset>
						</form>{' '}
						<div id='message-warning'> Error boy</div>
						<div id='message-success'>
							<i className='fa fa-check' />
							Your message was sent, thank you!
							<br />
						</div>
					</div>
				</center> */}
			</div>
		)
	}
}

export default Contact
