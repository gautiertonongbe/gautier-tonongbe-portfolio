import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Financial Analysis & Valuation (DCF, LBO, Comps)',
    'M&A & Due Diligence',
    'ERP Systems (NetSuite, Coupa, SAP FICO, Workiva)',
    'SOX 404 Compliance & Internal Audit',
    'Strategic Market Analysis (SWOT, Porter’s Five Forces)',
    'Data Automation (SQL, Python, Power BI, Tableau)',
    'Collaboration & Leadership (Jira, Confluence, Asana)',
    'Languages: English (Fluent), French (Fluent), German (Basic), Fongbe (Native)',
  ];

  const awards = [
    'Mandela Washington Fellowship (2021)',
    'Distinguished Toastmaster (2019)',
  ];

  const certifications = [
    'NetSuite Certified SuiteFoundation (2024)',
    'Coupa Core Implementation Specialist (2024)',
    'Coupa Expense Management (2024)',
    'Workiva Platform Certification (2024)',
  ];

  const education = [
    {
      institution: 'University of Notre Dame, Mendoza College of Business',
      degree: 'MBA, Finance',
      daterange: 'May 2024',
      notes: 'Academic Fellowship Recipient',
    },
    {
      institution: 'University of Technology and Management Science, Cotonou, Benin',
      degree: 'MS, International Management',
      daterange: 'May 2018',
      notes: 'Magna Cum Laude',
    },
    {
      institution: 'National School of Administration and Magistracy, Calavi, Benin',
      degree: 'BBA',
      daterange: 'Mar 2014',
      notes: 'Magna Cum Laude',
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm a dynamic Finance and Strategy professional with over 7 years of global experience in financial operations, M&A, valuation, and strategic planning across consulting, technology, and telecommunications sectors. Expert in SOX compliance, ERP implementations (NetSuite, Coupa), and IPO readiness, delivering scalable solutions for high-growth firms. Fluent in English and French, I thrive in entrepreneurial environments to enhance profitability and investor confidence.
            </p>
            <p>Here are a few areas of expertise I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <h3>Awards</h3>
          <ul className="skills-list">
            {awards && awards.map((award, i) => <li key={i}>{award}</li>)}
          </ul>

          <h3>Certifications</h3>
          <ul className="skills-list">
            {certifications && certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>

          <h3>Education</h3>
          <ul className="skills-list">
            {education && education.map((edu, i) => (
              <li key={i}>{edu.institution}: {edu.degree} ({edu.daterange}, {edu.notes})</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
