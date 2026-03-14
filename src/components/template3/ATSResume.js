import React from "react";
import "./ATSResume.css";
import data from "./data.json";

export default function ATSResume() {
  return (
    <div className="resume">
      <header className="header">
        <div className="name">{data.name}</div>
        <div className="role">{data.role}</div>
        <div className="contact">
          <span>{data.contact.email}</span>
          <span>{data.contact.phone}</span>
          <span>{data.contact.website}</span>
          <span>{data.contact.linkedIn}</span>
        </div>
      </header>

      <section style={{display: "none"}}>
        <h3>PROFILE</h3>
        <p>
          Experienced and innovative lawyer with a passion and dedication to
          justice. Highly organized and skilled in public speaking. Bringing
          forth a proven track record of achieving favorable outcomes for
          clients. Adept in preparing for trials, reviewing documents, and
          effectively presenting cases in court. A strong leader who works well
          under pressure and understands the complexities of the legal system.
        </p>
      </section>

      <section>
        <h3>EMPLOYMENT HISTORY</h3>

        {data.experience.map((job, index) => (
          <div className="job" key={index}>
            <div className="job-header">
              <strong>
                {job.position}, {job.company}
              </strong>
              <span>
                {job.startDate} – {job.endDate} | {job.location}
              </span>
            </div>
            <ul>
              {job.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h3>EDUCATION</h3>

        {data.education.map((edu, index) => (
          <div className="edu" key={index}>
            <div className="details">
                <strong>{edu.institution}</strong>
                <span>{edu.studyType} in {edu.area}</span>
            </div>
            <div className="details" style={{alignItems: 'end'}}>
                <span>
                    {edu.startDate} – {edu.endDate} | {" "} {edu.location}
                </span>
                <span>{edu.gpa}</span>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3>SKILLS</h3>
        <div className="skills">
          {data.skills.map((skill, index) => (
            <div key={index} className="skill-container">
              <div className="skill-name">
                {skill.name}:
              </div>
              <div className="skill-keywords">{skill.keywords.join(", ")}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>INTERNSHIPS</h3>
        <div className="edu">
          <strong>Law Internship, Brennan Center for Justice</strong>
          <span>May 2005 – Jun 2006 | New York</span>
        </div>
      </section>

      <section>
        <h3>REFERENCES</h3>
        <p>Available upon request</p>
      </section>
    </div>
  );
}
