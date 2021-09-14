import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './styles/contact.scss';
import { motion } from "framer-motion"


const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
      <section className='contact-container'>
        <article className='contact'>
          <section className='contact__header-container'>
          <motion.h1 
            transition={{duration:0.5, ease: "easeIn"}}
            animate={{
              scale: [0, 1]
            }}
            className='contact__title'>
              maxanderberg@gmail.com
            </motion.h1>
          </section>
          <section className='contact__links-container'>
          <ul className='contact__links'>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className='contact__link' target="_blank" rel="noopener norefferer" href="https://linkedin.com/in/maxanderberg">Linkedin</a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a className='contact__link' target="_blank" href="https://github.com/MaxAnderberg/">Github</a>
            </motion.li>
          </ul>
            </section>
        </article>

          
      </section>
  </Layout>
)

export default ContactPage
