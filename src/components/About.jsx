import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn , textVariant} from "../utils/motion"

const ServiceCard = ({title ,icon , index}) =>{
    return (
        <Tilt
            className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right" , "spring", 0.5*index , 0.75)}
                className="w-fullgreen-pink-gradiant p-[1px] rounded-[20px] shdaow-card"
            >
            <div
                options={{
                    max:45,
                    scale:1,
                    speed:450
                }}
                className='bg-tertiary rounded-[20px] py-5 px-2 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                    <img src={icon}alt={title} 
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] text-center'>{title}</h3>
            </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className='${styles.sectionSubText} mt-10'>Introduction</p>
        <p className={styles.sectionHeadText}
        >Overview.</p>
      </motion.div>
      <motion.p
        variants={fadeIn("" , "", 0.1 ,1)}
        className="mt-4 text-secondary text-[17px] max-w-5xl leading -[30px]">
        Hi there! My name is Anshuman Jha and I am currently pursuing my B-Tech at National Institute of Technology, Durgapur in West Bengal. I am equipped with problem-solving skills and programming expertise in C, C++ and Python. Additionally, I have completed several programming projects, including an online hotel reservation system and a bank transaction program, which are hosted on my GitHub profile.
        <br/>
        <br/>
        In terms of design, I have experience in graphic design with tools such as Photoshop, Figma, Adobe Illustrator, and Canva, as well as front-end web development using HTML, CSS, and JS. I have designed and developed two websites, including a clone of Flipkart and an e-commerce website for buying electronic items.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services , index) => (
            <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  )
}

export default About
