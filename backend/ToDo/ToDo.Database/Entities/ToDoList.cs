using System.ComponentModel.DataAnnotations.Schema;

namespace ToDo.Database.Entities;

[Table(nameof(ToDoList))]
public class ToDoList
{
    public ToDoList(string listName)
    {
        ListName = listName;
        ToDoListItems = [];
    }

    public int Id { get; set; }

    public string ListName { get; set; }

    public List<ToDoListItem> ToDoListItems { get; set; }
}

