import {useState} from "react";

export default function Form () {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  const [submitted, setSubmitted] = useState(false)

  function handleInput(event) {
    const {name, value} = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function onSubmit(event) {
    event.preventDefault()

    fetch(event.target.action + 'api/form', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'content-type': 'application/json'
      }
    }).then(() => setSubmitted(true))
  }

  return (
    <>
      {submitted ? (
        <p>Contato enviado. <br/> Obrigado!</p>
      ) : (
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Nome</label>
          <input id="name" name="nome" type="text"
                 onChange={handleInput} value={formData.nome}
                 required={true}/>

          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email"
                 onChange={handleInput} value={formData.email}
                 required={true}/>

          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" name="telefone" type="tel"
                 onChange={handleInput} value={formData.telefone}
                 required={true}/>

          <button type="submit">ENVIAR</button>
        </form>
      )}
    </>
  )
}