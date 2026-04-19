import svgPaths from "./svg-s1hgxcjt1a";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[0_90%_80.51%_0]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        {children}
      </svg>
    </div>
  );
}

export default function At() {
  return (
    <div className="relative size-full" data-name="at 1">
      <div className="absolute inset-[4.54%_4.55%_4.6%_4.55%]" data-name="features">
        <div className="absolute inset-[-0.05%_-0.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 909.5 466.6">
            <g id="features">
              <path d={svgPaths.p1b3dde00} fill="var(--fill-0, white)" id="AT3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p1f630e00} fill="var(--fill-0, white)" id="AT4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p22e65b00} fill="var(--fill-0, white)" id="AT1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p23582f00} fill="var(--fill-0, white)" id="AT8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.paca2580} fill="var(--fill-0, white)" id="AT7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p12baff00} fill="var(--fill-0, white)" id="AT5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p36cbee80} fill="var(--fill-0, white)" id="AT2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p2fd98c00} fill="var(--fill-0, white)" id="AT6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
              <path d={svgPaths.p3a41bb80} fill="var(--fill-0, white)" id="AT9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
            </g>
          </svg>
        </div>
      </div>
      <Wrapper>
        <g id="points">
          <g id="0"></g>
          <g id="1"></g>
          <g id="2"></g>
        </g>
      </Wrapper>
      <Wrapper>
        <g id="label_points">
          <g id="AT3"></g>
          <g id="AT4"></g>
          <g id="AT1"></g>
          <g id="AT8"></g>
          <g id="AT7"></g>
          <g id="AT5"></g>
          <g id="AT2"></g>
          <g id="AT6"></g>
          <g id="AT9"></g>
        </g>
      </Wrapper>
    </div>
  );
}