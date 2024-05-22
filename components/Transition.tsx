// "use client"

// import React from 'react'
// import { motion } from 'framer-motion'

// const TransitionVariants = {
//     initial:{
//         y: "100%",
//         height: "100%"
//     },
//     animate:{
//         y: "0%",
//         height: "0%"
//     },
//     exit:{
//         y: ["0%","100%"],
//         height: ["0%","100%"]
//     }

// }

// const Transition = () => {
//     const layers = [
//         { zIndex: 30, bgColor: '#2e2257', delay: 0.2 },
//         { zIndex: 20, bgColor: '#3b2d71', delay: 0.4 },
//         { zIndex: 20, bgColor: '#4b3792', delay: 0.6 }
//     ];

//     return (
//         <div className="relative h-screen w-full">
//             {layers.map((layer, index) => (
//                 <motion.div
//                     key={index}
//                     className={`fixed top-0 right-0 w-full h-full z-[${layer.zIndex}] bg-[${layer.bgColor}]`}
//                     variants={TransitionVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     transition={{ delay: layer.delay, duration: 0.6, ease: "easeInOut" }}
//                 />
//             ))}
//         </div>
//     )
// }

// export default Transition

"use client"

import React from 'react'
import { motion} from 'framer-motion'

const TransitionVariants = {
    initial:{
        y: "100%",
        height: "100%"
    },
    animate:{
        y: "0%",
        height: "0%"
    },
    exit:{
        y: ["0%","100%"],
        height: ["0%","100%"]
    }
}

const Transition = () => {
  return (
    <div>
        <motion.div
        className='fixed right-0 h-screen bottom-full z-[30] bg-[#2e2257]'
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.2 , duration: 0.6, ease: "easeInOut"}}
        />
        <motion.div
        className='fixed right-0 h-screen bottom-full z-[20] bg-[#3b2d71]'
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.4 , duration: 0.6, ease: "easeInOut"}}
        />
        <motion.div
        className='fixed right-0 h-screen bottom-full z-[10] bg-[#4b3792]'
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{delay: 0.6 , duration: 0.6, ease: "easeInOut"}}
        />
    </div>
  )
}

export default Transition