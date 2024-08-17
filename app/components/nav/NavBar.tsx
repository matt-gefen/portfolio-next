'use client';
// import Image from "next/image";
import Link from 'next/link'
// import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div>
      <Link href={'/contact'}>Contact</Link>
    </div>
  );
}
