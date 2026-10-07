const previousSchools = [
  { school: 'Holy Redeemer School of San Isidro', level: 'Senior High School', years: '2022–2024' },
  { school: 'Saint Isidore Academy of Laguna Inc', level: 'Junior High School', years: '2017–2022' },
  { school: 'Saint Isidore Academy of Laguna Inc', level: 'Elementary School', years: '2012–2017' },
]

export default function Education() {
  return (
    <section className="education section-wrap section-grid" id="education" aria-labelledby="education-title">
      <div className="section-index">EDUCATION</div>
      <div className="education-history">
        <div className="education-card">
          <p className="education-status">CURRENTLY STUDYING</p>
          <h2 id="education-title">Computer Science</h2>
          <p className="education-school">University of Cabuyao (PNC)</p>
          <p className="education-year">Third-year student · Academic year 2026–2027</p>
        </div>
        <ol className="education-timeline" aria-label="Previous education">
          {previousSchools.map(({ school, level, years }) => (
            <li key={level} className="education-entry">
              <p className="education-dates">{years}</p>
              <h3>{level}</h3>
              <p className="education-school">{school}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
