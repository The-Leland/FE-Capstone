


import React from 'react';

function SortSection({ sortField, setSortField, sortOrder, setSortOrder }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <label>
        Sort by:{' '}
        <select value={sortField} onChange={e => setSortField(e.target.value)}>
          <option value="id">ID</option>
          <option value="title">Title</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
        </select>
      </label>

      <label style={{ marginLeft: '1rem' }}>
        Order:{' '}
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default SortSection;
