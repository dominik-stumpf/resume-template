export function Header({ children }: { children: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tighter text-forest-green capitalize">
      {`${children} `}
      <span className="text-body">.</span>
    </h2>
  );
}
