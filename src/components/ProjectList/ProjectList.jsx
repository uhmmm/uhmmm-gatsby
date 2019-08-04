import React from 'react'

import Project from '../Project/Project'

import styles from './ProjectList.module.css'

const getPostList = projectEdges => {
  const projectList = []
  projectEdges.forEach(projectEdge => {
    projectList.push({
      ...projectEdge.node.frontmatter,
      ...projectEdge.node.fields,
      excerpt: projectEdge.node.excerpt,
      timeToRead: projectEdge.node.timeToRead,
      id: projectEdge.node.id
    })
  })
  return projectList
}

const ProjectList = ({ projectEdges }) => {
  const projectList = getPostList(projectEdges)
  return (
    <div className={styles.outer} id="projects">
      <div className={styles.listHeader}>
        <h2 className={styles.subtitle}>projects</h2>
        <div className={styles.listHeader__decoration} />
      </div>
      <div className={styles.listContainer}>
        {projectList.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
      <div className={styles.listHeader}>
        <div className={styles.listFooter__decoration} />
      </div>
    </div>
  )
}

export default ProjectList
