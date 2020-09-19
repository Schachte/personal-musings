import React from 'react';

function ProjectCard({emoji, projectTitle, technologies}) {
  return (
        <div className="card-container">
          <ol className="articles">
              <li className="article">
                <a className="card-link">
                    <div className="main-card-container main-card-container--lhs">
                    <div className="main-content">
                        <p>{emoji}</p>
                        <span>{projectTitle}</span>
                    </div>
                    <div className="card-footer">
                        <p>{technologies}</p>
                    </div>
                    </div>
                    <div
                    className="main-card-container main-card-container--rhs"
                    aria-hidden="true"
                    >
                    <div className="main-content">
                        <p>{emoji}</p>
                        <span>{projectTitle}</span>
                    </div>
                    <div className="card-footer">
                        <p>{technologies}</p>
                    </div>
                    </div>
                </a>
              </li>
          </ol>
        </div>
    );
}

export default ProjectCard;