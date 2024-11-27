using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Product> Products => Set<Product>();

        public DbSet<Contact> Contacts => Set<Contact>();
    }
}