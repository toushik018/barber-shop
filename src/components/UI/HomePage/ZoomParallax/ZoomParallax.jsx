import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from "./zoom.module.css"

import Picture1 from '../../../../../public/Images/11.jpg';
import Picture2 from '../../../../../public/Images/2.jpg';
import Picture3 from '../../../../../public/Images/3.jpg';
import Picture4 from '../../../../../public/Images/4.jpg'
import Picture5 from '../../../../../public/Images/5.jpg'
import Picture6 from '../../../../../public/Images/6.jpg'
import Picture7 from '../../../../../public/Images/7.jpg'

const ZoomParallax = () => {


    const container = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    
    return (
        <div ref={container} className={styles.container}>
            <div className={styles.textContainer}>
                <h3 ref={titleRef}>Our Works</h3>
                <h1 ref={descriptionRef}>Lorem ipsum dolor sit amet ipsum dolor</h1>
            </div>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    );
};

export default ZoomParallax;