import type { NextConfig } from 'next';

import '@/env/client';
import '@/env/server';

const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
} satisfies NextConfig;

export default nextConfig;
