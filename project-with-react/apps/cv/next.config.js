//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

const isStaticExport = process.env.NEXT_EXPORT === 'true';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
 const nextConfig = {
   // Use this to set Nx-specific options
   // See: https://nx.dev/recipes/next/next-config-setup
   nx: {},
  ...(isStaticExport ? { output: 'export' } : {}),
  images: {unoptimized: true}
 };

 const plugins = [
 // Add more Next.js plugins to this list if needed.
 withNx,
 ];

 module.exports = composePlugins(...plugins)(nextConfig);


