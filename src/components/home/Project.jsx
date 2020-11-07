import React, { useCallback, useEffect, useState } from 'react'
import {
	gitHubLink,
	gitHubQuery,
	gitHubUsername,
	projectHeading,
	projectsLength,
	specificRepos,
} from '../../editable-stuff/configurations.json'

import Iframe from 'react-iframe'
import ProjectCard from './ProjectCard'
import axios from 'axios'

const Project = () => {
	const allReposAPI = `${gitHubLink}users/${gitHubUsername}${gitHubQuery}`
	const specficReposAPI = `${gitHubLink}repos/${gitHubUsername}`
	const [projectsArray, setProjectsArray] = useState([])
	let repoList = []
	// const handleRequest = useCallback((e) => {
	// 	for (let repoName of specificRepos) {
	// 		axios
	// 			.get(`${specficReposAPI}/${repoName}`)
	// 			.then((response) => {
	// 				repoList.push(response.data)
	// 			})
	// 			.catch((error) => {
	// 				console.error(error.message)
	// 			})
	// 	}
	// 	axios
	// 		.get(allReposAPI)
	// 		.then((response) => {
	// 			repoList = [
	// 				...repoList,
	// 				...response.data.slice(0, projectsLength),
	// 			]
	// 		})
	// 		.catch((error) => {
	// 			return console.error(error.message)
	// 		})
	// 		.finally(() => {})
	// 	console.log(repoList)
	// 	setProjectsArray(repoList)
	// }, [])

	const handleRequest = useCallback(async () => {
		let repoList = []
		try {
			// adding specified repos
			try {
				for (let repoName of specificRepos) {
					const response = await axios.get(
						`${specficReposAPI}/${repoName}`
					)
					repoList.push(response.data)
				}
			} catch (error) {
				console.error(error.message)
			}
			// getting all repos
			const response = await axios.get(allReposAPI)
			// slicing to the length
			repoList = [...repoList, ...response.data.slice(0, projectsLength)]
			// setting projectArray
			// TODO: remove the duplication.
			setProjectsArray(repoList)
		} catch (error) {
			console.error(error.message)
		}
	}, [allReposAPI, projectsLength, specificRepos, specficReposAPI])

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
