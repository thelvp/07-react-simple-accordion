import './styles.css';
import {useState} from 'react';

const faqs = [
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
  {
    title: 'Where was Gondor when the Westfold fell?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  return (
    <div className='accordion'>
      {data.map((item, i) => (
        <AccordionItem
          num={i}
          title={item.title}
          text={item.text}
          key={item.title} // Truly unique, while index can be double in certain cases
        />
      ))}
    </div>
  );
}

function AccordionItem({num, title, text}) {
  const [isOpen, setisOpen] = useState(false);
  function handleToggle() {
    setisOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{text}</div>}
    </div>
  );
}
