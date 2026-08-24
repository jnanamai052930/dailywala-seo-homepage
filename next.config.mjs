/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/services/construction-and-site-work/', destination: '/services/construction-and-skilled-trades/', permanent: true },
      { source: '/services/repairs-and-maintenance/', destination: '/services/repair-and-technical-services/', permanent: true },
      { source: '/services/operations-and-support/', destination: '/services/facility-and-business-workforce/', permanent: true },
      { source: '/services/welders/', destination: '/services/welders-and-steel-fixers/', permanent: true },
      { source: '/services/bar-benders/', destination: '/services/welders-and-steel-fixers/', permanent: true },
      { source: '/services/foremen/', destination: '/services/foremen-and-site-supervisors/', permanent: true },
      { source: '/services/ac-mechanics/', destination: '/services/ac-technicians/', permanent: true },
      { source: '/services/refrigerator-repair/', destination: '/services/refrigerator-technicians/', permanent: true },
      { source: '/services/washing-machine-repair/', destination: '/services/washing-machine-technicians/', permanent: true },
      { source: '/services/truck-drivers/', destination: '/services/truck-and-tractor-drivers/', permanent: true },
      { source: '/services/tractor-drivers/', destination: '/services/truck-and-tractor-drivers/', permanent: true },
      { source: '/services/domestic-services/', destination: '/services/household-and-care-services/', permanent: true },
      { source: '/services/admin-staff/', destination: '/services/admin-and-timekeeping-staff/', permanent: true },
    ];
  },
};

export default nextConfig;
