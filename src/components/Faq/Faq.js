import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Faq = ({ questions }) => {
  return (
    <div className='accordion'>
      {questions.map((accordion) => {
        const { id, title, info } = accordion;

        return (
          <div className='accordion__item' key={id}>
            <button className='accordion__item__header'>
              <p>{title}</p>
              <BsFillArrowDownCircleFill className='arrow' />
            </button>
            <div className='accordion__item__body'>{info}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
