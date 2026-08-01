"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
import { Skeleton } from "@mantine/core";

export default function HomeImage({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Skeleton visible={isLoading} height={"fit-content"} width={"fit-content"}>
      <Image
        className={styles.image_portrait}
        src={src}
        alt=""
        height="340"
        width="240"
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </Skeleton>
  );
}
