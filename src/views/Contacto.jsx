import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contacto() {
  const [form, setForm] = useState(initialForm)
  const [channel, setChannel] = useState('whatsapp')
  const [sent, setSent] = useState(false)
  const isFormComplete = Object.values(form).every((value) => value.trim())

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setSent(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const message = [
      `Hola Jaime, soy ${form.name}.`,
      `Correo: ${form.email}`,
      `Asunto: ${form.subject}`,
      '',
      form.message,
    ].join('\n')

    if (channel === 'whatsapp') {
      window.open(`https://wa.me/573157081030?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = `mailto:jaime.ja203@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(message)}`
    }

    setSent(true)
  }

  return (
    <section className="contact-page px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
      <div className="contact-shell max-w-6xl mx-auto">
        <div className="contact-layout">
          <div className="contact-heading lg:-translate-x-10 ">
            <span className="contact-eyebrow">Hablemos</span>
            <h1>Cuéntame qué tienes en mente.</h1>
            <p>Una idea, una colaboración o simplemente una buena conversación sobre tecnología.</p>
          </div>

          <div className="contact-form-column">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-fields-row">
                <label>
                  Nombre
                  <input name="name" value={form.name} onChange={updateField} placeholder="Tu nombre" required />
                </label>
                <label>
                  Correo
                  <input type="email" name="email" value={form.email} onChange={updateField} placeholder="tu@correo.com" required />
                </label>
              </div>

              <label>
                Asunto
                <input name="subject" value={form.subject} onChange={updateField} placeholder="¿En qué podemos trabajar?" required />
              </label>

              <label>
                Mensaje
                <textarea name="message" value={form.message} onChange={updateField} placeholder="Escribe tu mensaje..." rows="5" required />
              </label>

              <div className="contact-form-footer">
                <div className="contact-channel" role="group" aria-label="Elegir canal de envío">
                  <button type="button" className={channel === 'whatsapp' ? 'is-selected' : ''} onClick={() => setChannel('whatsapp')}>
                    WhatsApp
                  </button>
                  <button type="button" className={channel === 'email' ? 'is-selected' : ''} onClick={() => setChannel('email')}>
                    Correo
                  </button>
                </div>
                <button className="contact-submit" type="submit" disabled={!isFormComplete}>
                  Enviar mensaje <span aria-hidden="true">↗</span>
                </button>
              </div>
              {sent && <p className="contact-status">Se abrió tu aplicación de {channel === 'whatsapp' ? 'WhatsApp' : 'correo'}.</p>}
            </form>

            <aside className="contact-aside">
              <div>
                <p className="contact-aside-label">Puedes escribirme</p>
                <a href="mailto:jaime.ja203@gmail.com">jaime.ja203@gmail.com</a>
                <a href="https://wa.me/573157081030" target="_blank" rel="noreferrer">+57 315 708 1030</a>
              </div>
              <p className="contact-aside-note">Responderé tan pronto como pueda.</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto