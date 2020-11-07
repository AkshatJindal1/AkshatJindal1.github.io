import React, { useCallback, useEffect, useState } from 'react'
import {
	gitHubLink,
	gitHubQuery,
	gitHubUsername,
	projectHeading,
	projectsLength,
} from '../../editable-stuff/configurations.json'

import Iframe from 'react-iframe'
import ProjectCard from './ProjectCard'
import axios from 'axios'

const Project = () => {
	const [projectsArray, setProjectsArray] = useState([])

	const handleRequest = useCallback((e) => {
		axios
			.get(gitHubLink + gitHubUsername + gitHubQuery)
			.then((response) => {
				// handle success
				// console.log(response.data.slice(0, 4));
				return setProjectsArray(response.data.slice(0, projectsLength))
			})
			.catch((error) => {
				// handle error
				return console.error(error.message)
			})
			.finally(() => {
				// always executed
			})
	}, [])

	useEffect(() => {
		handleRequest()
	}, [handleRequest])

	return (
		<div id='projects' className='jumbotron jumbotron-fluid m-0'>
			{projectsArray.length && (
				<div className='container container-fluid p-5'>
					<h1 className='display-4 pb-5 mb-4 text-center'>
						{projectHeading}
					</h1>
					<div className='row mb-1 pb-1'>
						{projectsArray.map((project) => (
							<ProjectCard
								key={project.id}
								id={project.id}
								value={project}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Project
