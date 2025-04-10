import './styles.css';
import {useState} from 'react';
import React from 'react';

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
  const [currentlyOpen, setIsOpen] = useState(null);

  return (
    <div className='accordion'>
      {data.map((item, i) => (
        <AccordionItem
          index={i}
          title={item.title}
          key={item.title}
          currentlyOpen={currentlyOpen}
          setIsOpen={setIsOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({index, title, currentlyOpen, setIsOpen, children}) {
  const isOpen = index === currentlyOpen;

  function handleToggle() {
    setIsOpen(isOpen ? null /* to close it, if it is already open */ : index);
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{index < 9 ? `0${index + 1}` : index + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isOpen ? '-' : '+'}</p>
      {isOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}
