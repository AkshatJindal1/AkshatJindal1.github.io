import React, { Profiler, useEffect, useState } from 'react'

import Deloitte from '../../editable-stuff/deloitte.png'
import Sapient from '../../editable-stuff/sapient.png'

const divStyle = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
}
const Experience = () => {
	return (
		<div
			id='experience'
			className='jumbotron jumbotron-fluid m-0'
			style={{ backgroundColor: 'white' }}
		>
			<div className='container container-fluid'>
				<div className='row'>
					<div className='col d-lg-inline align-self-center'>
						<h1 className='display-4 mb-5 text-center'>
							Experience
						</h1>
						{/* <h1 className="display-4 pb-5">Experience</h1> */}
						<div className='row' style={divStyle}>
							<div className='col text-center'>
								<img
									// className='border border-secondary rounded-circle'
									src={Sapient}
									alt='Publicis Sapient logo'
									width='320'
									// height='170'
								/>
								<br />
								<br />
								<p
									className='lead text-center'
									style={{ fontSize: '22px' }}
								>
									Software Development Engineer
									<br />
									June 2019 - Prsent
								</p>
								{/* <h3>Dell Technologies</h3> */}
							</div>
							<div className='col text-center'>
								<img
									// className='border border-secondary rounded-circle'
									src={Deloitte}
									alt='Deloitte logo'
									width='320'
									// height='70'
								/>
								<br />
								<br />
								<p
									className='lead text-center'
									style={{ fontSize: '22px' }}
								>
									Technology Consultant
									<br />
									May - July 2018
								</p>
								{/* <h3>Boeing</h3> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Experience
