import React from 'react';

const Card = ({ Imgurl, Demourl, Githuburl }) => {
  return (
    <div className='bg-black shadow-sm shadow-white text-white  rounded-md'>
      <img className='rounded-sm h-[250px]' src={Imgurl} alt="Project" />
      <div className='flex justify-around p-4'>
        <a href={Demourl} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={Githuburl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Card;
