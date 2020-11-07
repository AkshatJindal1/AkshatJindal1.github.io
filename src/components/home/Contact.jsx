import React, { Component } from 'react'
import {
	contactDescription,
	contactHeading,
} from '../../editable-stuff/configurations.json'

class Contact extends React.Component {
	componentDidMount() {
		const head = document.querySelector('head')
		const script = document.createElement('script')
		script.setAttribute(
			'src',
			'https://assets.calendly.com/assets/external/widget.js'
		)
		head.appendChild(script)
	}

	componentWillUnmount() {}

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
								href='mailto:ajindal.iitkgpgmail.com@'
								style={{ color: '#606060' }}
							>
								here!
							</a>
						</p>
					</div>
				</center>
				<center>
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
				</center>
				{/* <div>
					<div id='schedule_form' mb-0>
						<div
							className='calendly-inline-widget'
							data-url='https://calendly.com/jefferyjohn/45-minute-meeting'
							style={{ minWidth: '320px', height: '800px' }}
						/>
					</div>
				</div> */}
			</div>
		)
	}
}

export default Contact
