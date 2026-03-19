/**
 * SectionDivider – a glowing, animated horizontal separator between sections.
 * The centre orb pulses with a slow animation, while the two arms fade out
 * symmetrically to create a premium 'laser-line' feel.
 */
const SectionDivider = () => (
  <div className="relative flex w-full items-center justify-center py-2">
    {/* Left arm */}
    <div
      className="h-[2px] flex-1"
      style={{
        background:
          "linear-gradient(to right, transparent, #6c3de8 70%, #915EFF)",
      }}
    />

    {/* Centre diamond / orb */}
    <div className="relative mx-3 flex items-center justify-center">
      {/* Outer pulse ring */}
      <span
        className="absolute inline-flex h-5 w-5 animate-ping rounded-full opacity-60"
        style={{ backgroundColor: "#915EFF", animationDuration: "2s" }}
      />
      {/* Inner diamond */}
      <span
        className="relative inline-block h-3 w-3 rotate-45 rounded-sm"
        style={{
          background: "linear-gradient(135deg, #915EFF, #c084fc)",
          boxShadow: "0 0 12px 4px #915EFF, 0 0 24px 8px #6c3de880",
        }}
      />
    </div>

    {/* Right arm */}
    <div
      className="h-[2px] flex-1"
      style={{
        background:
          "linear-gradient(to left, transparent, #6c3de8 70%, #915EFF)",
      }}
    />
  </div>
);

export default SectionDivider;
