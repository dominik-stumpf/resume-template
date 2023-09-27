export function BackgroundGraphics() {
  return (
    <div
      className='absolute inset-0 tracking-tight capitalize select-none whitespace-nowrap text-9xl font-display text-dim -z-10'
      aria-hidden
    >
      <div className='-translate-y-20 -translate-x-1/4'>software engineer</div>
      <div className='absolute right-0 translate-x-4 top-6'>*</div>
      <div className='absolute right-0 translate-x-1/2 top-20'>1</div>

      <div className='italic font-display-italic '>
        <div className='absolute bottom-0 left-0 -translate-x-5 translate-y-5'>
          &
        </div>
        <div className='absolute bottom-0 left-0 -translate-x-6 translate-y-4'>
          ’
        </div>
        <div className='absolute bottom-0 left-0 translate-y-[5.3rem] translate-x-10'>
          z
        </div>
        <div className='absolute bottom-0 left-0 translate-y-[6.6rem] translate-x-[6.8rem]'>
          ’
        </div>
      </div>
    </div>
  );
}
