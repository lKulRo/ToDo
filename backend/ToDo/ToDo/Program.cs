using ToDo.Database;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "localhost",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200");
                          policy.WithMethods("POST", "PUT", "DELETE", "GET");
                          policy.AllowAnyHeader();
                      });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ToDoDbContext>(options =>
            options.UseNpgsql(GetSqlConnectionString()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("localhost");

app.UseAuthorization();

app.MapControllers();

app.Run();


string GetSqlConnectionString()
{
    IConfigurationSection sqlSection = builder.Configuration.GetSection("ConnectionStrings");
    return sqlSection["ToDoDatabase"] ?? "";
}