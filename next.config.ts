import type { NextConfig } from 'next';

import '@/env/client';
import '@/env/server';

const nextConfig = {
    reactStrictMode: true,
} satisfies NextConfig;

export default nextConfig;
