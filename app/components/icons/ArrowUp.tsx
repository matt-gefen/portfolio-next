interface Props {
  viewBox?:string,
  size?: string
}

const ArrowUp = ({viewBox, size}:Props) => {
  return (
<svg width={size} height={size} viewBox={viewBox ? viewBox : "0 0 18 18"} xmlns="http://www.w3.org/2000/svg">

<g data-name="Layer 2">

<g data-name="diagonal-arrow-right-up">

<rect width={size} height={size} transform="rotate(180 12 12)" opacity="0"/>

<path d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"/>

</g>

</g>

</svg>
);
};

export default ArrowUp;