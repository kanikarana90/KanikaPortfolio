import React from 'react';
import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const openResume = (filePath: string) => {
  window.open(filePath, '_blank');
};



const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            onClick={id === 4 ? () => openResume("KanikaRanaMAinResume.docx") : null}
          />
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
