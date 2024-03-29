using System.ComponentModel.DataAnnotations.Schema;

namespace ToDo.Database.Entities;

[Table(nameof(ToDoListItem))]
public class ToDoListItem
{
    public ToDoListItem(string item)
    {
        Item = item;
    }

    public int Id { get; set; }

    public string Item { get; set; }

    public int ToDoListId { get; set; }

    //public ToDoList ToDoList
    //{
    //    get => _toDoList = value;
    //    set => _toDoList ?? throw new InvalidOperationException("Uninitialized property: " + nameof(ToDoList));
    //}
    public required ToDoList ToDoList { get; set; }
}

