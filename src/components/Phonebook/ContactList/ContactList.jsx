export default function ContactList({ items }) {
    const element = items.map(({name, number, id}) => {
        return <li key={id}>{name}: {number}</li>
    })
  return (
    <ul>{element}</ul>
  )
}
