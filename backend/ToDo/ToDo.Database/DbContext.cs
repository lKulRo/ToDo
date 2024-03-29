namespace ToDo.Database;

using System.Collections.Generic;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;
using ToDo.Database.Entities;

public class ToDoDbContext : DbContext
{
    public DbSet<ToDoList> ToDoLists { get; set; }
    public DbSet<ToDoListItem> ToDoListItems { get; set; }

    public ToDoDbContext(DbContextOptions<ToDoDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<ToDoList>().HasKey(x => x.Id);
        modelBuilder.Entity<ToDoList>().HasMany(x => x.ToDoListItems).WithOne(x => x.ToDoList).OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<ToDoListItem>().HasKey(x => x.Id);
    }
}