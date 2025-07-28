import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown} from 'lucide-react';
import { experienceList } from '../Constant/ExperienceConstant';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
  const [experieceExpand, setExperienceExpand] = useState(false);

  const handleExperience = () => {
        setExperienceExpand(!experieceExpand);

        window.scrollTo(0, 0);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            My Expertise
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center">
            With over 1 year of hands-on experience in these technologies <ArrowDown className="ml-2 h-5 w-5 text-orange-600" />
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {experienceList.slice(0,4).map((tech) => (
            <motion.div
              key={tech.id}
              variants={item}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-orange-50 hover:border-orange-200 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-50 to-pink-50 group-hover:from-orange-100 group-hover:to-pink-100 transition-all">
                    <img 
                      src={tech.img} 
                      alt={tech.title} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{tech.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">And many more tools in my toolkit</p>
          <button onClick={handleExperience} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
           <Link to = '/experience'>View Full Skillset</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;