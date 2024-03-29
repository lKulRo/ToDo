using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDo.Database;
using ToDo.Database.Entities;
using ToDo.Dtos;

namespace ToDo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListsController : ControllerBase
    {
        private readonly ILogger<ToDoListsController> _logger;

        public ToDoListsController(ILogger<ToDoListsController> logger)
        {
            _logger = logger;
        }

        //TODOLIST

        [HttpGet]
        public async Task<IEnumerable<ToDoListDto>> GetToDoListsAsync(
        [FromServices] ToDoDbContext db)
        {
            return await db.ToDoLists.Select(x => new ToDoListDto { Id = x.Id, Name = x.ListName }).ToArrayAsync();
        }

        [HttpPost]
        public async Task PostToDoListsAsync(
        [FromServices] ToDoDbContext db,
        [FromBody] string listName)
        {
            ToDoList entity = new(listName);
            db.ToDoLists.Add(entity);
            await db.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public async Task PutToDoListsAsync(
        [FromServices] ToDoDbContext db,
        [FromBody] string name,
        int id)
        {
            var entity = await db.ToDoLists.SingleAsync(x => x.Id == id);
            entity.ListName = name;
            await db.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task DeleteToDoListsAsync(
        [FromServices] ToDoDbContext db,
         int id)
        {
            var entity = await db.ToDoLists.SingleAsync(x => x.Id == id);
            db.ToDoLists.Remove(entity);
            await db.SaveChangesAsync();
        }

        //TODOLISTITEMS

        [HttpGet("{id}")]
        public async Task<IEnumerable<ToDoListDto>> GetToDoListItemAsync(
        [FromServices] ToDoDbContext db,
        int id)
        {
            return await db.ToDoListItems.Where(x => x.ToDoListId == id).Select(x => new ToDoListDto { Id = x.Id, Name = x.Item }).ToArrayAsync();
        }

        [HttpPost("{id}")]
        public async Task PostToDoListItemAsync(
        [FromServices] ToDoDbContext db,
        [FromBody] string name,
        int id)
        {
            ToDoListItem entity = new(name) { ToDoList = await db.ToDoLists.SingleAsync(x => x.Id == id) };
            db.ToDoListItems.Add(entity);
            await db.SaveChangesAsync();
        }

        [HttpPut("{id}/{itemId}")]
        public async Task PutToDoListItemAsync(
        [FromServices] ToDoDbContext db,
        [FromBody] string name,
        int id, int itemId)
        {
            var entity = await db.ToDoListItems.SingleAsync(x => x.Id == itemId && x.ToDoListId == id);
            entity.Item = name;
            await db.SaveChangesAsync();
        }

        [HttpDelete("{id}/{itemId}")]
        public async Task DeleteToDoListItemAsync(
        [FromServices] ToDoDbContext db,
        int id, int itemId)
        {
            var entity = await db.ToDoListItems.SingleAsync(x => x.Id == itemId && x.ToDoListId == id);
            db.ToDoListItems.Remove(entity);
            await db.SaveChangesAsync();
        }
    }
}