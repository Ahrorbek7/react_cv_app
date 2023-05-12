import React, { useState, useRef, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from './useFormHook';

const Skills = props => {
  const [values, handleChange] = useForm({
    skillType: "Team Managemant",
    skill: 'Frontend Development TeamLead at UIC Group'
  });
  const [editMode, setEditMode] = useState(false);
  const [skills, setSkills] = useState(null)
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

  const changeHandler = e => {
    setSkills(e.target.value);
  };

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
          placeholder="Enter Skill Type"
          value={values.skillType}
          onChange={handleChange}
        />{" "}
        •{" "}
        <input
          type="text"
          name="skill"
          className="secondary"
          placeholder="Enter Skill"
          value={values.skill}
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
            <span className="primary">{values.skillType}</span>
            <div>
              <span className="secondary">{values.skill}</span>
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

export default Skills;
