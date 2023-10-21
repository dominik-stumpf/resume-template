export function BackgroundGraphics() {
  return (
    <div
      className="absolute inset-0 tracking-tight capitalize select-none whitespace-nowrap text-9xl font-display text-dim -z-10"
      aria-hidden
    >
      <div className="-translate-y-20 -translate-x-1/4">software engineer</div>
      <div className="absolute right-0 translate-x-4 top-6">*</div>
      <div className="absolute right-0 translate-x-1/2 top-20">1</div>
      <div className="absolute w-[98%] right-0 top-[5rem]">
        <svg viewBox="0 0 584 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>display horizontal rule</title>
          <path
            d="M0.11322 2.99995L3 5.8867L5.88678 2.99995L3 0.113198L0.11322 2.99995ZM584 2.5L3 2.49995L3 3.49995L584 3.5L584 2.5Z"
            className="fill-dim"
          />
        </svg>
      </div>

      <div className="italic font-display-italic ">
        <div className="absolute bottom-0 left-0 -translate-x-5 translate-y-5">
          &
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-6 translate-y-4">
          ’
        </div>
        <div className="absolute bottom-0 left-0 translate-y-[5.3rem] translate-x-10">
          z
        </div>
        <div className="absolute bottom-0 left-0 translate-y-[6.6rem] translate-x-[6.8rem]">
          ’
        </div>
      </div>
      <div
        className="absolute bottom-0 italic text-transparent rotate-90 translate-x-1/2 -translate-y-20 text-8xl -right-2 font-display-italic"
        style={{ WebkitTextStroke: '1px var(--dim)' }}
      >
        curriculum vitae
      </div>
      <div className="absolute text-base italic tracking-tight text-black lowercase bottom-1 right-2 font-display-italic">
        ds
      </div>
    </div>
  );
}
