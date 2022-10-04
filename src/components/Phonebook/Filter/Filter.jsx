
export default function Filter({handleChange, filter}) {
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" name="filter" value={filter} onChange={handleChange}></input>
        </div>
  )
}
