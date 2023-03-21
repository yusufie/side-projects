import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://twitter.com/" target="_blank">Made with ❤️ by{" "}</Link>
    </footer>
  );
}

export { Footer };
