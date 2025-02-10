import { motion } from "framer-motion"

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#6748a4",
      }}
      transition={{
        duration: 5,
        ease: "easeOut",
      }}
      className="aspect-square bg-neutral-950 border-neutral-900"
    />
  )
}
export default Tile
