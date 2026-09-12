declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }

  export type LucideIcon = React.FC<LucideProps>;

  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Instagram: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowDown: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const Check: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Clock: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Send: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Shield: LucideIcon;
}
