import { fireEvent, render, screen } from '../../test-utils';
import { expect, test } from 'vitest';
import NoteApp from '../NoteApp';
import { NotesProvider } from '../../context/NotesContext';
import AppProvider from '../../provider/AppProvider';

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/Note title/i);
  const inputDescrip = screen.getByPlaceholderText(/Note description/i);
  const button = screen.getByRole('button', { name: /Add New Note/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescrip, { target: { value: note.description } });

    fireEvent.click(button);
  });
}

test('Note app #1:should input be empty after submit', () => {
  render(
    <NotesProvider>
      <NoteApp sortBy="latest" />
    </NotesProvider>
  );
  addNote([{ title: 'Note one title', description: 'note one description' }]);
  const inputTitle = screen.getByPlaceholderText(/Note title/i);

  expect(inputTitle.value).toBe('');
});

test('Note app #2:should add multiple items', () => {
  render(<NoteApp sortBy="latest" />);
  addNote([
    { title: 'Note one title', description: 'note one description' },
    { title: 'Note one title', description: 'note one description' },
    { title: 'Note one title', description: 'note one description' },
  ]);
  const Evelemnt = screen.getAllByText(/Note one title/i);
  expect(Evelemnt.length).toBe(3);
});

test('Note app #3:should not have active class when initally renderd', () => {
  render(<NoteApp sortBy="latest" />);
  addNote([{ title: 'Note one title', description: 'note one description' }]);
  const Evelemnt = screen.getByTestId('note-item');
  expect(Evelemnt).not.toHaveClass('competed');
});

//test('Note app #4:should  have active class when item click', () => {
//  render(
//    <NotesProvider>
//      <NoteApp sortBy="latest" />
//    </NotesProvider>
//  );
//  addNote([{ title: 'Note one title', description: 'note one description' }]);
//  const checkbox = screen.getByRole('checkbox');
//  fireEvent.click(checkbox);
//  const Evelemnt = screen.getByTestId('note-item');
//
//  expect(Evelemnt).not.toHaveClass('completed');
//});

test('Note app #4:should  have active class when item click', () => {
  render(<NoteApp sortBy="latest" />);
  addNote([{ title: 'Note one title', description: 'note one description' }]);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  const Evelemnt = screen.getByTestId('note-item');
  expect(Evelemnt).toHaveClass('completed');
});
