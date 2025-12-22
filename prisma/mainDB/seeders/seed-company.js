// Seeder for Company table using Prisma Client
// Run: node prisma/mainDB/seeders/seed-company.js

import { PrismaClient } from '../@prisma/client-main/index.js';
const prisma = new PrismaClient();

const companies = [
  { companyCode: 'C0001', companyName: 'PT. Kapuas Kencana Jaya', companyCity: 'Palangkaraya', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0002', companyName: 'CV. Sumber Murni', companyCity: 'Banjarmasin', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0003', companyName: 'PT. Indah Logistik', companyCity: 'Jakarta', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0004', companyName: 'PT. SURYA ALAM PERSADA', companyCity: 'Banten', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0005', companyName: 'PT. Surya Alam Semesta', companyCity: 'Jakarta', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0006', companyName: 'PT. Surya Alam Persada', companyCity: 'Jakarta', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0007', companyName: 'CV. Sagita Utama', companyCity: 'Bandung', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0008', companyName: 'PT. Alfa Scorpii', companyCity: 'Sumut', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0009', companyName: 'PT. Basilindo Pratama', companyCity: 'Ujung Pandang', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0010', companyName: 'PT. Deli Agung Patria Perkasa', companyCity: 'Padang', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0011', companyName: 'PT. Dharma Guna Perdana', companyCity: 'Lampung', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0012', companyName: 'CV. Bintang Jaya', companyCity: 'Bali', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0013', companyName: 'PT. Kharisma Makmur Abadi', companyCity: 'Pontianak', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0014', companyName: 'PT. Panca Benua Rona Permai', companyCity: 'Pekanbaru', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0015', companyName: 'CV. Raharja Motor Jaya', companyCity: 'Palembang', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0016', companyName: 'PD. Sumber Murni', companyCity: 'Banjarmasin', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0017', companyName: 'PT. Suraco Jaya Abadi Motor', companyCity: 'Makassar', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0018', companyName: 'Kosasih Suwito (CV. Tenaga Baru)', companyCity: 'Pangkal Pinang - Ban', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0019', companyName: 'PT. Alfa Scorpii', companyCity: 'Batam', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0020', companyName: 'CV. Mandiri Perdana', companyCity: 'Makassar', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0021', companyName: 'PT. Mitra Putera Abadi', companyCity: 'Bandung', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0022', companyName: 'PT. SUMBER ARTA SELALU SEJAHTERA', companyCity: 'Surabaya', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0023', companyName: 'PT. SURYA ALAM SEMESTA', companyCity: 'BEKASI', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0024', companyName: 'Rani Nugroho (UD. Dipta Pratama)', companyCity: 'Palu', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0025', companyName: 'PT. SUMBER ARTA SELALU SEJAHTERA', companyCity: 'Solo', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0026', companyName: 'PT. Surya Alam Semesta', companyCity: 'Banten', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0027', companyName: 'PT. Scorpio Multi Persada', companyCity: 'Balikpapan', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0029', companyName: 'PT. SARANG MAS SEJAHTERA', companyCity: 'Batam', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0030', companyName: 'PT. CASULUT LUBRINDO UTAMA', companyCity: 'Manado', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0031', companyName: 'CV. SETIA TUNGGAL', companyCity: 'Jayapura Utara', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0032', companyName: 'Franklin Sucipto (Toko Sinar Sulawesi)', companyCity: 'Toko Sinar Sulawesi', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0033', companyName: 'CV. Demak Indah', companyCity: 'Papua Selatan', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0034', companyName: 'PT. BUMI IRIAN INDAH', companyCity: 'Papua Barat', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0035', companyName: 'CV. Tenaga Baru Motor', companyCity: 'Pangkal Pinang - Ban', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0036', companyName: 'CV. Telaga Berkat Abadi', companyCity: 'Palembang', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0037', companyName: 'PT. SINARAGUNG PRASADIKINDO (Solo)', companyCity: 'Solo', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0038', companyName: 'PT. SINARAGUNG PRASADIKINDO (Surabaya)', companyCity: 'Surabaya', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0039', companyName: 'PT. WAHANA KREASINDO UTAMA', companyCity: 'Surabaya', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0040', companyName: 'PT. MARS SURYA JAYA', companyCity: 'BEKASI', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0041', companyName: 'PT ASIAN BEARINDO SEJAHTERA', companyCity: 'JAKARTA', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0042', companyName: 'PT. ASTRA OTOPARTS TBK', companyCity: 'CIBITUNG', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0043', companyName: 'PT. ARDENDI JAYA SENTOSA', companyCity: 'CIBITUNG', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0044', companyName: 'CV. MSJ AUTOLINE', companyCity: 'Jakarta Barat', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
  { companyCode: 'C0045', companyName: 'CV. DAVINDO SEJAHTERA ABADI', companyCity: 'Surabaya', companyStatus: 'Active', application: 'distro-po', companyType: 'Distributor' },
];

function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function main() {
  for (const c of companies) {
    await prisma.company.create({
      data: {
        companyCode: c.companyCode,
        companyName: c.companyName,
        companyStatus: c.companyStatus,
        companyCity: c.companyCity,
        companyType: c.companyType,
        application: c.application,
        companyEmail: `${randomString(8)}@example.com`,
        companyTelpFax: `08${Math.floor(100000000 + Math.random() * 900000000)}`,
        npwp: `${Math.floor(100000000000000 + Math.random() * 900000000000000)}`,
        urlImage: '',
        companyAddress: `${randomString(12)} Street`,
      },
    });
  }
  console.log('Company seed completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
