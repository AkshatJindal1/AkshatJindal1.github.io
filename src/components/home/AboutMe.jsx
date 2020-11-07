import React, { useEffect, useState } from 'react'
import {
	aboutDescription,
	aboutHeading,
	imgSize,
	instaLink,
	instaQuerry,
	instaUsername,
	showInstaProfilePic,
} from '../../editable-stuff/configurations.json'

import Akshat from '../../editable-stuff/akshat.jpg'
import Pdf from '../../editable-stuff/resume.pdf'
import axios from 'axios'

const AboutMe = () => {
	const [instaProfilePic, setInstaProfilePic] = useState(Akshat)
	const [showInsta, setShowInsta] = useState(showInstaProfilePic)
	const [resumeURL] = useState(Pdf)

	useEffect(() => {
		if (showInsta) {
			handleRequest()
		}
	}, [showInsta])

	const handleRequest = (e) => {
		axios
			.get(instaLink + instaUsername + instaQuerry)
			.then((response) => {
				// handle success
				// console.log(response.data.graphql);
				return setInstaProfilePic(
					response.data.graphql.user.profile_pic_url_hd
				)
			})
			.catch((error) => {
				// handle error
				setShowInsta(false)
				return console.error(error.message)
			})
			.finally(() => {
				// always executed
			})
	}

	return (
		<div id='aboutme' className='jumbotron jumbotron-fluid m-0'>
			<div className='container container-fluid p-5'>
				<div className='row'>
					{showInsta && (
						<div className='col-5 d-none d-lg-block align-self-center'>
							<img
								className='border border-secondary rounded-circle'
								src={Akshat}
								alt='profilepicture'
								width={imgSize}
								height={imgSize}
							/>
						</div>
					)}
					<div className={`col-lg-${showInsta ? '7' : '12'}`}>
						<h1 className='display-4 mb-5 text-center'>
							{aboutHeading}
						</h1>
						<p className='lead text-center'>{aboutDescription}</p>
						{resumeURL && (
							<p className='lead text-center'>
								<a
									className='btn btn-outline-dark btn-lg'
									href={Pdf}
									target='_blank'
									rel='noreferrer noopener'
									role='button'
									aria-label='Resume/CV'
								>
									Resume
								</a>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutMe
