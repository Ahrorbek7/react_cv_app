import React, { useState, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const Licenses = props => {
  const [values, handleChange] = useForm({
    liceName: "Qwasar Pre-season web",
    givenSource: 'qwasar.io',
    givenTime: "May 2023",
    creId:"ID 5667897"
  });
  const [editMode, setEditMode] = useState(false);
  const btnRef = useRef();
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    inputRef.current.style.display = "none";
  };

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const displaySkills = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="skillType"
          className="primary"
          placeholder="Enter Licence Name"
          value={values.liceName}
          onChange={handleChange}
        />{" "}
        •{" "}
        <input
          type="text"
          name="skill"
          className="secondary"
          placeholder="Where did you get it?"
          value={values.givenSource}
          onChange={handleChange}
        />
        <input
          type="text"
          name="skill"
          className="secondary"
          placeholder="When did you get it?"
          value={values.givenTime}
          onChange={handleChange}
        />
        <input
          type="text"
          name="skill"
          className="secondary"
          placeholder="Enter ID"
          value={values.creId}
          onChange={handleChange}
        />
        <button ref={btnRef} className="btn btn--save" onClick={saveOrEdit}>
        <i class="bi bi-check-circle"></i>
        </button>
      </form>
    ) : (
      <div className="edit-dad">
        <div className="company-info">
          <div className="upl-img">
            <input
              id="img-input"
              ref={inputRef}
              type="file"
              onChange={handleImageUpload}
            />
            {image && (
              <div>
                <img src={URL.createObjectURL(image)} />
              </div>
            )}
          </div>
          <div className="company-position">
            <span className="primary">{values.liceName}</span>
            <div>
              <span className="secondary">{values.givenSource}</span>
              <p>{values.givenTime}</p>
              <p>{values.creId}</p>
            </div>
          <hr />
          </div>
        </div>
        <div>
        {props.previewMode ? null : (
          <button
            className='btn btn--edit'
            onClick={saveOrEdit}
          >
            <i class="bi bi-pen"></i>
          </button>
        )}
        </div>
      </div>
    );
  };

  return <div>{displaySkills()}</div>;
};

export default Licenses;
