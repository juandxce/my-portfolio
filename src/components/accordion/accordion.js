import React from 'react';
import { Image } from 'theme-ui';
import { BaseAccordion } from './base-accordion';
import accordionIconClose from 'assets/accordion-arrow.svg';
import accordionIconOpen from 'assets/accordion-arrow-e.svg';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';
import { FaCaretRight, FaCaretDown} from 'react-icons/fa'

export default function Accordion({ items, ...props }) {
  const openIcon = <FaCaretDown />;
  const closeIcon = <FaCaretRight />;
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              isOpen={openIndexes.includes(index)}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <span>
                  {openIndexes.includes(index) ? openIcon : closeIcon}
                </span>
                {item.title}
              </AccordionButton>
              <AccordionContents isOpen={openIndexes.includes(index)}>
                {item.contents}
              </AccordionContents>
            </AccordionItem>
          ))}
        </>
      )}
    </BaseAccordion>
  );
}
