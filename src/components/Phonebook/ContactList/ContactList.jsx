import css from "../Phonebook.module.css"

export default function ContactList({ items, removeContact }) {
    const element = items.map(({name, number, id}) => {
        return <li key={id}>{name}: {number} <span onClick={() => removeContact(id)}>Delete</span></li>
    })
  return (
    <ul>{element}</ul>
  )
}
