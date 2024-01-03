import Program from './Program'

function Conference({ value: conf }) {
  const programList = [...conf.plan, ...conf.reports].sort((l, r) => l.startAt.localeCompare(r.startAt))
  return (
    <div>
      <h1>{conf.name}</h1>
      <h3>{conf.date} {conf.startAt} - {conf.finishAt}</h3>
      <h3>Максимальное количество участников {conf.max} человек</h3>
      <h3>{conf.place.name}, {conf.place.address}</h3>
      <h2>О конференции</h2>
      {conf.about.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
      <Program values={programList} />
    </div>
  )
}

export default Conference
