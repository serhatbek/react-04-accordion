import { default as accordions } from '../../data';
console.log(accordions);

const Faq = () => {
  return (
    <div className='accordion'>
      {accordions.map((accordion) => {
        const { id, title, info } = accordion;

        return (
          <div className='accordion__item' key={id}>
            <div className='accordion__item__header'>
              <p>{title}</p>
            </div>
            <div className='accordion__item__body'>{info}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
