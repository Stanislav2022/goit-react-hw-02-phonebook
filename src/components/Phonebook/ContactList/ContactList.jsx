export default function ContactList({ items, removeContat }) {
    const element = items.map(({name, number, id}) => {
        return <li key={id}>{name}: {number}<span onClick={() => removeContat(id)}>Delete</span></li>
    })
  return (
    <ul>{element}</ul>
  )
}
