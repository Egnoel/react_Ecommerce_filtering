import React from 'react';
import './Category.css';
import Input from '../../components/Input';

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value={''} name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          name="test"
          value="sneakers"
          title="Sneakers"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="flats"
          title="Flats"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="sandals"
          title="Sandals"
        />
        <Input
          handleChange={handleChange}
          name="test"
          value="heels"
          title="Heels"
        />
      </div>
    </div>
  );
};

export default Category;
