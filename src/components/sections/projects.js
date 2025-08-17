import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

// Your updated static projects data
const projects = [
  {
    title: 'ERP Implementation Support',
    description: 'Assisted NetSuite and Coupa rollout for a $650M+ public company, achieving 30% efficiency gains.',
    tech: ['NetSuite', 'Coupa'],
  },
  {
    title: 'Market Expansion Strategy',
    description: 'Developed $7M revenue expansion plan via market analysis for YPO.',
    tech: ['Demographic Modeling', 'Financial Projections'],
  },
  {
    title: 'Process Optimization',
    description: 'Designed vendor systems at Sud Telecom, reducing invoice cycle time by 28%.',
    tech: ['Oracle NetSuite'],
  },
];

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  const projectInner = project => (
    <div className="project-inner">
      <h3 className="project-title">{project.title}</h3>
      <div className="project-description">{project.description}</div>
      {project.tech && (
        <ul className="project-tech-list">
          {project.tech.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <StyledProjectsSection>
      <h2>Other Noteworthy Projects</h2>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          projectsToShow.map((project, i) => <StyledProject key={i}>{projectInner(project)}</StyledProject>)
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow.map((project, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={300} exit={false}>
                <StyledProject ref={el => (revealProjects.current[i] = el)}>
                  {projectInner(project)}
                </StyledProject>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      {projects.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
