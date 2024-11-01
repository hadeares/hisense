import { div } from 'framer-motion/client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface AccordionData {
  title: string
  content: any[]
}

const AccordionItem = ({ title, content }: AccordionData) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className="w-full text-left py-4 bg-dark text-hisense focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <span className={`text-lg hover:font-bold duration-150 ${isOpen ? 'font-bold' : 'font-medium'}`}>{title}</span>
          <FiChevronDown
            className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'
              }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out border-b border-gray-800 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="bg-gray-500 bg-opacity-5 p-5 pt-10 mb-4">
          <div className="text-gray-300">
            {content.map((option, i) =>
              <div className='flex border-b border-dark' key={i}>
                <div className="flex-1 py-5">
                  <p>{option.item}</p>
                </div>
                <div className="flex-1 py-5">
                  <p>{option.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
