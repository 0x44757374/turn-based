import { defineConfig } from 'rollup';
import type { Component } from 'solid-js';

//@ts-ignore
import styles from './RockPaperScissors.module.css';

const RockPaperScissors: Component = () => {
  return (
    <div class={styles.App}>
     <header class={styles.header}>
     </header>
   </div>
  );
};

export default RockPaperScissors;