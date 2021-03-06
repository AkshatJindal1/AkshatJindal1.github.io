import { Container, Jumbotron } from 'react-bootstrap'

import React from 'react'
import Row from 'react-bootstrap/Row'
import SkillsTab from './SkillsTab'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { skills } from '../../editable-stuff/configurations.json'

// import { useScrollPosition } from '../../hooks/useScrollPosition'

function Skills() {
	const skillsTabRef = React.useRef()
	const [isScrolled, setIsScrolled] = React.useState(false)

	return (
		<Jumbotron
			ref={skillsTabRef}
			fluid
			className='bg-white m-0'
			id='skills'
		>
			<Container className='p-5 '>
				<h2 ref={skillsTabRef} className='display-4 pb-5 text-center'>
					{skills.heading}
				</h2>
				<Tabs
					className='skills-tabs'
					defaultActiveKey='hard-skills'
					id='skills-tabs'
					justify
				>
					<Tab
						tabClassName='skills-tab lead'
						eventKey='hard-skills'
						title='Technical Skills'
					>
						<Row className='pt-3 px-1'>
							<SkillsTab
								skills={skills.hardSkills}
								isScrolled={isScrolled}
							/>
						</Row>
					</Tab>
					<Tab
						tabClassName='skills-tab lead'
						eventKey='soft-skills'
						title='Soft Skills'
					>
						<Row className='pt-3 px-1'>
							<SkillsTab
								skills={skills.softSkills}
								isScrolled={isScrolled}
							/>
						</Row>
					</Tab>
				</Tabs>
			</Container>
		</Jumbotron>
	)
}

export default Skills
