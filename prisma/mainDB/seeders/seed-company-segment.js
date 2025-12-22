// Seeder for CompanySegment table
// Run: node prisma/mainDB/seeders/seed-company-segment.js

import { PrismaClient } from '../@prisma/client-main/index.js';
const prisma = new PrismaClient();
const segments = [
  { segmentName: 'Automotive', description: 'Automotive industry and related businesses' },
  { segmentName: 'Manufacturing', description: 'Manufacturing and production companies' },
  { segmentName: 'Technology', description: 'IT, software, and technology services' },
  { segmentName: 'Consulting', description: 'Business and management consulting' },
  { segmentName: 'Construction', description: 'Construction and infrastructure' },
  { segmentName: 'Healthcare', description: 'Healthcare providers and services' },
  { segmentName: 'Retail', description: 'Retail and consumer goods' },
  { segmentName: 'Finance', description: 'Banking, insurance, and financial services' },
  { segmentName: 'Education', description: 'Schools, universities, and educational services' },
  { segmentName: 'Logistics', description: 'Logistics, transportation, and supply chain' },
  { segmentName: 'Energy', description: 'Oil, gas, and renewable energy' },
  { segmentName: 'Telecommunications', description: 'Telecom and communication services' },
  { segmentName: 'Food & Beverage', description: 'Food production, restaurants, and catering' },
  { segmentName: 'Government', description: 'Government and public sector' },
  { segmentName: 'Real Estate', description: 'Property, real estate, and development' }
];

async function main() {
  for (const segment of segments) {
    await prisma.companySegment.upsert({
      where: { segmentName: segment.segmentName },
      update: {},
      create: segment,
    });
  }
  console.log('Company segments seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
