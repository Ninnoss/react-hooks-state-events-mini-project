import React, { useState } from 'react';

function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText('');
    setCategory('Code');
  }

  return (
    <form
      className="new-task-form"
      onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {categories
            .filter((cat) => cat !== 'All')
            .map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
        </select>
      </label>
      <input
        type="submit"
        value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;

// Controlled Form Component

// import React, { useState } from 'react';

// function NewTaskForm({ onTaskFormSubmit, categories }) {
//   const [formValues, setFormValues] = useState({
//     text: '',
//     category: 'Code',
//   });

//   function handleSubmit(e) {
//     e.preventDefault();
//     onTaskFormSubmit(formValues);
//     setFormValues({ text: '', category: 'Code' });
//   }

//   function handleInputChange(e) {
//     const { name, value } = e.target;
//     setFormValues((formValues) => ({
//       ...formValues,
//       [name]: value,
//     }));
//   }

//   return (
//     <form
//       className="new-task-form"
//       onSubmit={handleSubmit}>
//       <label>
//         Details
//         <input
//           type="text"
//           name="text"
//           value={formValues.text}
//           onChange={handleInputChange}
//         />
//       </label>
//       <label>
//         Category
//         <select
//           name="category"
//           value={formValues.category}
//           onChange={handleInputChange}>
//           {categories
//             .filter((cat) => cat !== 'All')
//             .map((cat) => (
//               <option key={cat}>{cat}</option>
//             ))}
//         </select>
//       </label>
//       <input
//         type="submit"
//         value="Add task"
//       />
//     </form>
//   );
// }

// export default NewTaskForm;
