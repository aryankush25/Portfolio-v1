import sharp from "sharp";
import { promises as fs } from "fs";
import { join } from "path";

const ICON_SIZES = [16, 32, 180, 192, 512];
const BASE_SVG = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="monospace" font-size="300" fill="#4F46E5">{</text>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="monospace" font-size="300" fill="#ffffff">}</text>
</svg>
`;

async function generateIcons() {
  const publicDir = join(process.cwd(), "public");

  // Ensure public directory exists
  await fs.mkdir(publicDir, { recursive: true });

  // Save the base SVG
  await fs.writeFile(join(publicDir, "safari-pinned-tab.svg"), BASE_SVG);

  // Create a Buffer from the SVG
  const svgBuffer = Buffer.from(BASE_SVG);

  // Generate PNG icons
  for (const size of ICON_SIZES) {
    const image = sharp(svgBuffer);

    // Resize
    image.resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 1 },
    });

    // Save as PNG
    if (size === 16) {
      await image.toFile(join(publicDir, "favicon-16x16.png"));
      // Save 16x16 version for favicon.ico
      await image.toFormat("png").toFile(join(publicDir, "favicon-16.png"));
    } else if (size === 32) {
      await image.toFile(join(publicDir, "favicon-32x32.png"));
      // Save 32x32 version for favicon.ico
      await image.toFormat("png").toFile(join(publicDir, "favicon-32.png"));
    } else if (size === 180) {
      await image.toFile(join(publicDir, "apple-touch-icon.png"));
    } else if (size === 192) {
      await image.toFile(join(publicDir, "android-chrome-192x192.png"));
    } else if (size === 512) {
      await image.toFile(join(publicDir, "android-chrome-512x512.png"));
      // Also generate OG image with different dimensions
      await sharp(svgBuffer)
        .resize(1200, 630, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 1 },
        })
        .toFile(join(publicDir, "og-image.png"));
    }
  }

  // For favicon.ico, we'll use the 32x32 PNG version
  // Copy the 32x32 PNG as favicon.ico (most modern browsers support PNG favicons)
  const favicon32Buffer = await fs.readFile(join(publicDir, "favicon-32.png"));
  await fs.writeFile(join(publicDir, "favicon.ico"), favicon32Buffer);

  // Clean up temporary files
  await fs.unlink(join(publicDir, "favicon-16.png"));
  await fs.unlink(join(publicDir, "favicon-32.png"));

  console.log("✅ All icons generated successfully!");
}

generateIcons().catch(console.error);
