import React from 'react';

import { ListItem, List } from 'spectacle';

const isItemBold = boldItems => item => {
  if (!boldItems) return false;
  if (!Array.isArray(boldItems)) {
    boldItems = [boldItems];
  }
  return boldItems.includes(item + 1);
};

export default function Steps({ textColor, steps, bold }) {
  const isBold = isItemBold(bold);

  const listItems = steps.map((item, index) => (
    <ListItem bold={isBold(index)} key={index}>
      {item}
    </ListItem>
  ));

  return <List textColor={textColor}>{listItems}</List>;
}
