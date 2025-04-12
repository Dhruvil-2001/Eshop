/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import KidsCategory from "../assets/Images/Kids.jpg";
import ManCategory from "../assets/Images/men.png";
import WomanCategory from "../assets/Images/Women.jpg";

export const categories = [
  { title: "Men", imageUrl: ManCategory },
  { title: "Women", imageUrl: WomanCategory },
  { title: "Kids", imageUrl: KidsCategory },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <motion.div
      className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer backdrop-blur-md bg-white/10"
      variants={cardVariants}
      whileHover={{
        scale: 1.1,
        rotate: 2, // Tilt effect on hover
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-4 text-white text-2xl font-semibold"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

const CategoryList = () => {
  return (
    <motion.div
      className="flex gap-6 justify-center mt-10 p-10 min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 }, // Staggered appearance
        },
      }}
    >
      {categories.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </motion.div>
  );
};

export default CategoryList;
