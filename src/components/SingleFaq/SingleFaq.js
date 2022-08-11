import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const SingleFaq = ({ title, info }) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className={`accordion__item ${showBody ? 'active' : ''}`}>
      <button
        className='accordion__item__header'
        onClick={() => setShowBody(!showBody)}
      >
        <span>{title}</span>
        <BsFillArrowDownCircleFill className='arrow' />
      </button>
      <div className='accordion__item__body'>{info}</div>
    </div>
  );
};

export default SingleFaq;
