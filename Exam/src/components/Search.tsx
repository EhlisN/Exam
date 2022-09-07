import React, { Dispatch, SetStateAction } from 'react';

const Search = ({
  field,
  btnName,
  setOpenModal,
  setSearch,
}: {
  field: string;
  btnName: string;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="input-group mb-3 mt-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={field}
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default Search;
