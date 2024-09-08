import React from 'react';
import { workExperience } from '@/data';

const Work = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold my-4">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workExperience.map((exp) => (
          <div key={exp.id} className={`p-4 border border-gray-200 rounded md:col-span-${exp.className}`}>
            <img src={exp.thumbnail} alt={exp.title} className="w-full h-24 object-cover mb-2" />
            <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
