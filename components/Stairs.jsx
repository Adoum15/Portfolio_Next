import { motion } from 'framer-motion'

const stairAnimation ={
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit:{
    top: ["100%", "0%"],
  }
}

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index -1;
}


function Stairs() {
  return (
    <>
    {[...Array(6)].map((_, index)=> {
     return( <motion.div 
      key={index} 
      variants={stairAnimation} 
      initial ="initial" 
      animate="animate"
      exit="exit"
      transition = {{
        duration: 0.2,
        ease: "easeInOut",
        delay: reverseIndex(index) * 0.1,
      }}
      className='h-full w-full bg-[#e0f7da] relative'
      />)
    })}
    </>
  )
}

export default Stairs
