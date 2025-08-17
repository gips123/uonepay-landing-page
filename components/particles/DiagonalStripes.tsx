export default function DiagonalStripes({
  opacity = 0.1,
}: {
  opacity?: number;
}) {
  return (
    <div
      className='absolute inset-0 pointer-events-none'
      style={{
        opacity,
        backgroundImage:
          'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 10px)',
      }}
    />
  );
}
