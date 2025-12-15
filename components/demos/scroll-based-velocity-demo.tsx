import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="MZBPO"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-brand-teal drop-shadow-sm md:text-7xl md:leading-[5rem]"
    />
  );
}
