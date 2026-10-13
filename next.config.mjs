/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/kontes-desain: PintuWeb meneruskan path /kontes-desain
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/kontes-desain',
  async redirects() {
    // Alamat lama portal-kontes.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/kontes-desain', basePath: false, permanent: true },
      { source: '/:lama((?!kontes-desain(?:/|$)).+)', destination: 'https://www.pintuweb.id/kontes-desain', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
