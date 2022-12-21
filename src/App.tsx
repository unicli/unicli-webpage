import styles from './App.module.css'

import type { Component } from 'solid-js'

const App: Component = () => {
  return (
    <div class={styles.main}>
      <div class={styles.brand}>
        <div class={styles.logo}>
          <svg
            class={styles.logoRoot}
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.1913 23.6536L67.1501 14.6055C45.724 2.03864 24.2979 -4.99884 9.84774 5.55733C-16.5612 26.167 17.1004 84.614 63.6621 120.67C27.7859 145.301 -3.6059 141.782 24.7961 94.5307L15.3288 82.9692C-28.5199 144.296 26.291 195.066 121.463 86.4879C148.597 134.242 136.909 148.317 94.5554 126.199L83.095 134.242C144.384 175.964 194.71 125.194 87.0813 28.6804C125.449 4.55198 152.356 5.55733 126.149 55.1913L135.415 66.8836C178.765 -6.00417 116.48 -35.1593 27.9872 61.726C4.568 31.0629 2.87184 -3.99347 55.1913 23.6536ZM93.3845 77.6471C93.3845 89.9526 87.4556 97.1513 74.5588 97.1513C61.6008 97.1513 55.7942 89.9526 55.7942 77.6471V54.882H67.1018V77.3395C67.1018 83.7383 69.5467 86.384 74.5588 86.384C79.6319 86.384 82.0768 83.7383 82.0768 77.3395V54.882H93.3845V77.6471Z"
              fill="white"
            />
          </svg>

          <svg
            class={styles.particle1}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.671 0C11.7396 4.2637 12.037 8.70934 13.528 12.8074C9.30806 11.866 4.90928 12.1659 0.85257 13.6714C1.78564 9.40816 1.48932 4.96244 0 0.863766C4.21851 1.80667 8.61592 1.5069 12.671 0Z"
              fill="white"
            />
          </svg>

          <svg
            class={styles.particle2}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.671 0C11.7396 4.2637 12.037 8.70934 13.528 12.8074C9.30806 11.866 4.90928 12.1659 0.85257 13.6714C1.78564 9.40816 1.48932 4.96244 0 0.863766C4.21851 1.80667 8.61592 1.5069 12.671 0Z"
              fill="white"
            />
          </svg>
        </div>

        <div class={styles.labelWrapper}>
          <div class={styles.label}>Universal CLI</div>
          <div class={styles.version}>v0.0.0</div>
        </div>
      </div>

      <a href="https://www.npmjs.com/package/@unicli/core-test" class={styles.getStarted}>
        Get Started
      </a>
    </div>
  )
}

export default App
