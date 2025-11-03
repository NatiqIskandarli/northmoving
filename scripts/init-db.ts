import { initDatabase, testConnection, closePool } from '../src/lib/db';

async function main() {
  console.log('🚀 Starting database initialization...\n');

  // Test connection
  console.log('1️⃣ Testing database connection...');
  const connected = await testConnection();
  
  if (!connected) {
    console.error('\n❌ Database connection failed!');
    console.error('Please check your DATABASE_URL in .env.local');
    process.exit(1);
  }

  // Initialize tables
  console.log('\n2️⃣ Creating database tables...');
  await initDatabase();

  console.log('\n✅ Database initialization complete!');
  console.log('\nYou can now:');
  console.log('  - Access admin panel at: http://localhost:3000/admin');
  console.log('  - Submit forms to create leads');
  console.log('  - View and manage leads in the dashboard\n');

  await closePool();
}

main().catch((error) => {
  console.error('\n❌ Error during initialization:', error);
  process.exit(1);
});

