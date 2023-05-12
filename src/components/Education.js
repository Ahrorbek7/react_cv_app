import React, { useState, useEffect, useRef } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const Education = props => {
  const [values, handleChange] = useForm({
    school: "Oxford International University",
    study: "Mathematics and physics",
    time: "2010-2016",
    description: "Grade: 5\n -Mathemathics \n -English Skills",
  });

  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const btnRef = useRef();

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const saveOrEdit = e => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    inputRef.current.style.display = "none";
  };

  const displaySchool = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="school"
          className="primary"
          placeholder="Enter School"
          value={values.school}
          onChange={handleChange}
        />{" "}
        •{" "}
        <input
          type="text"
          name="study"
          className="secondary"
          placeholder="Enter Study"
          value={values.study}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="time"
          className="date"
          placeholder="2010-2016"
          value={values.time}
          onChange={handleChange}
        />{" "} 
        <br />
        <textarea
          name="description"
          rows="4"
          value={values.description}
          onChange={handleChange}
        ></textarea>
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
            <span className="secondary">{values.study}</span>
            <div>
              <span className="primary">{values.school}</span>
              {""}
              <p>{values.time}</p>
            </div>
            <p className="description">{values.description}</p>
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
        <br />
      </div>
    );
  };

  return <div>{displaySchool()}</div>;
};

export default Education;
