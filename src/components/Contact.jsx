import React from 'react'
import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser'

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// 4Vca17TinMpX9UBcO
// template_w37ihet
// service_a7jbf2f

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    
    emailjs.send(
      'service_a7jbf2f', 
      'template_w37ihet',
      {
        from_name: form.name,
        to_name: 'MD Habibullah',
        from_eamil: form.email,
        to_email: 'habibullah162470@gmail.com',
        message: form.message
      },
      '4Vca17TinMpX9UBcO'
    ).then(() => {
      setLoading(false)
      alert('I will get back to you as soon as possible.');
      setForm({
        name: "",
        email: "",
        message: ""
      }), (error) => {
        setLoading(false)

        console.log(error)
        alert("Something went wrong.")
      }
    })

  }
  return (
    <div className='xl:mt-2 xl:flex-row flex-col-reverse items-center flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='sm:w-[500px] xl:w-[500px] flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input 
              type="text"
              name="name" 
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input 
              type="email"
              name="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea 
              rows="4"
              name="message" 
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xs:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
