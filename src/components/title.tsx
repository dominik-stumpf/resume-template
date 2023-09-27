export function Title({ children }: { children: string }) {
  return (
    <div className='text-2xl font-semibold text-green-600 capitalize'>
      {`${children} `}
      <span className='text-zinc-800'>.</span>
    </div>
  );
}
