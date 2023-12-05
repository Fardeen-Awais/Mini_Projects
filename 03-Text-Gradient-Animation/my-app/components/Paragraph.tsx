'use client'
import React, {useEffect, useRef} from 'react'
import styles from '../app/page.module.scss'
import { useScroll } from 'framer-motion'
import {motion} from 'framer-motion'

const Word = ({value}:any) => {
    const element = useRef(null)
    const {scrollYProgress} = useScroll({
        target: element,
        offset:['start end', 'start start']
    })

    useEffect(() => {
        scrollYProgress.on("change", e => {
            console.log(e)
        })
    })
return (
    <motion.p ref={element} className={styles.paragraph} style={{opacity:scrollYProgress}}>
        {value}
    </motion.p>
  )
}

export default Word