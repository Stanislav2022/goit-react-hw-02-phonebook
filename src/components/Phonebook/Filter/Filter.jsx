
export default function Filter({handleChange, filter}) {
  return (
    <input type="text" name="filter" value={filter} onChange={handleChange}></input>
  )
}
