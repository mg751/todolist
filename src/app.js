"use strict";

class Item {
  constructor(id, createdDate, title, notes, dueDate, priority, completed) {
    this.id = id;
    this.createdDate = createdDate;
    this.title = title;
    this.notes = notes;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateNotes(newNotes) {
    this.notes = newNotes;
  }

  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }

  updatePriority(newPriority) {
    this.priority = newPriority;
  }
}

window.Item = Item;
