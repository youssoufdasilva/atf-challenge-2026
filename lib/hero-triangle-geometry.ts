/**
 * Equilateral triangle geometry for the hero SVG stroke overlay.
 * Same construction as the triangular hole in `heroRedClipPathCss`: centroid at
 * normalized anchor, circumradius = baseRadiusFrac * min(w,h) * scale, rotation in degrees.
 */

export type HeroTriangleVertex = { x: number; y: number };

/**
 * Vertices in SVG polygon order (consistent winding for the equilateral triangle).
 */
export function heroEquilateralTriangleVertices(
  w: number,
  h: number,
  anchorX: number,
  anchorY: number,
  scale: number,
  rotateDeg: number,
  baseRadiusFrac: number
): [HeroTriangleVertex, HeroTriangleVertex, HeroTriangleVertex] {
  const m = Math.min(w, h);
  const cx = anchorX * w;
  const cy = anchorY * h;
  const radius = baseRadiusFrac * m * scale;

  const rad = (rotateDeg * Math.PI) / 180;
  const angles = [-Math.PI / 2, Math.PI / 6, (5 * Math.PI) / 6] as const;

  const pts = angles.map((a) => {
    const x = cx + radius * Math.cos(a + rad);
    const y = cy + radius * Math.sin(a + rad);
    return { x, y };
  });

  return [pts[0], pts[1], pts[2]];
}

/**
 * `points` attribute string for `<polygon>` (2 decimal places, matches clip-path precision).
 */
export function heroEquilateralTrianglePointsAttr(
  w: number,
  h: number,
  anchorX: number,
  anchorY: number,
  scale: number,
  rotateDeg: number,
  baseRadiusFrac: number
): string {
  const [a, b, c] = heroEquilateralTriangleVertices(
    w,
    h,
    anchorX,
    anchorY,
    scale,
    rotateDeg,
    baseRadiusFrac
  );
  return `${fmt(a.x)},${fmt(a.y)} ${fmt(b.x)},${fmt(b.y)} ${fmt(c.x)},${fmt(c.y)}`;
}

function fmt(n: number): string {
  return Number.isFinite(n) ? n.toFixed(2) : "0";
}
