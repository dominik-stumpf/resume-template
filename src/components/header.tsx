export function Header({ children }: { children: string }) {
  return (
    <h2 className='text-2xl font-semibold text-green-600 capitalize'>
      {`${children} `}
      <span className='text-zinc-800'>.</span>
    </h2>
  );
}
