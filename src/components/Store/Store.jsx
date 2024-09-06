import { useState } from 'react';
import { IconSwitch } from '../IconSwitch';
import { CardsView } from '../CardsView';
import { ListView } from '../ListView';
// import styles from './Store.module.css';

export const Store = ({ products }) => {
  const [view, setView] = useState('cards');

  const toggleView = () => {
    setView(prevView => (prevView === 'cards' ? 'list' : 'cards'));
  };

  return (
    <>
      <IconSwitch
        icon={view === 'cards' ? 'view_list' : 'view_module'}
        onSwitch={toggleView}
      />
      {view === 'cards' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
};