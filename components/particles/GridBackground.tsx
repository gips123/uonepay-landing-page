export default function GridBackground({
  opacity = 0.05,
  size = 40,
}: {
  opacity?: number;
  size?: number;
}) {
  return (
    <div
      className='absolute inset-0 pointer-events-none'
      style={{
        opacity,
        backgroundImage:
          'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
