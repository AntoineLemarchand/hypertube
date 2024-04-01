// namespace WebApi.Helpers;

// using Microsoft.EntityFrameworkCore;
// using WebApi.Entities;

// public class DataContext : DbContext
// {
//   protected readonly IConfiguration Configuration;

//   public DataContext(IConfiguration configuration)
//   {
//     Configuration = configuration;
//   }

//   protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//   {
//     optionsBuilder.UseNpgsql(Configuration.GetConnectionString("WebApiDatabase"));
//   }

//   public DbSet<User> Users { get; set; }
// }
