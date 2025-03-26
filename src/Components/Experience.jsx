import React from 'react';
import Card from './Card';

const Experience = () => {
    const Logo = [
        {   
          id: 1,
          Imgurl: '/assets/html.png',
          color: 'shadow-orange-600'

        },
        {   
          id: 2,
          Imgurl: '/assets/css.png',
          color: 'shadow-cyan-400'
        },
        {   
          id: 3,
          Imgurl: '/assets/js.png',
          color: 'shadow-yellow-400'
        },
        {   
          id: 4,
          Imgurl: '/assets/react.svg',
          color: 'shadow-blue-600'
        },
        {   
          id: 5,
          Imgurl: '/assets/tailwind.png',
          color: 'shadow-blue-400'
        },
        {   
          id: 6,
          Imgurl: '/assets/github_logo.png',
          color: 'shadow-white'
        }
      ];

  return (
    <div className='mt-10 text-white '>
        <div className='mb-10'>
      <h2 className='underline text-3xl font-bold  '>Experience</h2>
      <p>These are the technologies I've worked with and used them in my projects.</p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-3 justify-center sm:justify-between gap-5">
        {Logo.map((logo) => (
          <Card
            key={logo.id}
            Imgurl={logo.Imgurl}
            color={logo.color}
            showLinks ={false}
             height='h-[100px]'
             padding={true}
             experience={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
