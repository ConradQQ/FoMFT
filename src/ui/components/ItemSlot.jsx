import React from 'react';

const ItemSlot = ({slotTypes, slot}) => {

  const isSlotSelected = Array.isArray(slotTypes) && slotTypes.includes(slot);

  return (
    <div className={
      isSlotSelected
        ? 'text-center bg-red-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'
        : 'text-center bg-green-300 w-16 h-16 mx-2 lg:w-32 lg:h-32'
    }>
    </div>
  );

};

export default ItemSlot;