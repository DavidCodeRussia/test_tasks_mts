export interface Metric {
  h: number;
  w: number;
  x: number;
  y: number;
  i: string;
  static?: boolean;
}
export interface ShowcaseLayoutProps {
  currentBreakpoint?: string;
  className?: string;
  rowHeight?: number;
  cols?: Record<string,number>;
  compactType?: "vertical" | "horizontal" | null | undefined;
  mounted?: boolean;
  layouts?: {
    lg?: Metric[];
  }
  initialLayout?: Metric[];
  onLayoutChange?: (layout: Metric, layouts: Metric[]) => void;
  defaultProps?: Record<string, any>
}

export interface ShowcaseLayoutState extends Partial<ShowcaseLayoutProps> {}