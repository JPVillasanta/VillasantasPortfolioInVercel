export default function SectionHeading({ index, title, description }) {
  return (
    <div className="section-heading">
      <div><p className="section-index">{index}</p><h2 id={`${title.toLowerCase()}-title`}>{title}<span className="accent">.</span></h2></div>
      <p>{description}</p>
    </div>
  )
}
