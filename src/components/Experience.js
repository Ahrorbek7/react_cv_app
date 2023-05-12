import React, { useState, useRef, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "./useFormHook";

const Experience = (props) => {
  const [values, handleChange] = useForm({
    company: "UIC Group",
    position: "Frontend development Team Lead",
    time: "Full time 1 year",
    dateStart: "May 2022",
    workPlace: "Tashkent, Uzbekistan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod totam minus obcaecati sunt blanditiis recusandae inventore eum veniam alias optio? Quam beatae quo a sunt nisi ad adipisci ratione ullam adipisicing elit. Quod totam minus obcaecati sunt blanditiis recusandae!",
  });
  const [editMode, setEditMode] = useState(false);
  const btnRef = useRef();
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    props.previewMode && btnRef.current && btnRef.current.click();
  }, [props.previewMode]);

  const saveOrEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    inputRef.current.style.display = "none";
  };

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setImage1(file);
    inputRef1.current.style.display = "none";
  };

  const handleImageUpload2 = (event) => {
    const file = event.target.files[0];
    setImage2(file);
    inputRef2.current.style.display = "none";
  };
  const handleImageUpload3 = (event) => {
    const file = event.target.files[0];
    setImage3(file);
    inputRef3.current.style.display = "none";
  };

  const displayExperience = () => {
    return editMode ? (
      <form onSubmit={saveOrEdit}>
        <input
          type="text"
          name="company"
          className="primary"
          placeholder="Enter Company"
          value={values.company}
          onChange={handleChange}
        />{" "}
        •{" "}
        <input
          type="text"
          name="position"
          className="secondary"
          placeholder="Enter Position"
          value={values.position}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="time"
          className="date"
          placeholder="[Month] [Year]"
          value={values.time}
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          name="dateStart"
          className="dateStart"
          placeholder="May 2022"
          value={values.dateStart}
          onChange={handleChange}
        />
        <input
          type="text"
          name="workPlace"
          className="workPlace"
          placeholder="Tashkent,Uzbekistan"
          value={values.workPlace}
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
            <span className="secondary">{values.position}</span>
            <div>
              <span className="primary">{values.company}</span>
              {""} -{values.time}
            </div>
            <p>{values.dateStart}</p>
            <p>{values.workPlace}</p>
            <p className="description">{values.description}</p>
            <div className="work-images">
              <input
                id="work-img"
                ref={inputRef1}
                type="file"
                onChange={handleImageUpload1}
              />
              {image1 && (
                <div>
                  <img src={URL.createObjectURL(image1)} />
                </div>
              )}

              <input
                id="work-img"
                ref={inputRef2}
                type="file"
                onChange={handleImageUpload2}
              />
              {image2 && (
                <div>
                  <img src={URL.createObjectURL(image2)} />
                </div>
              )}

              <input
                id="work-img"
                ref={inputRef3}
                type="file"
                onChange={handleImageUpload3}
              />
              {image3 && (
                <div>
                  <img src={URL.createObjectURL(image3)} />
                </div>
              )}
            </div>
          <hr />
          </div>
        </div>
        <div>
        {props.previewMode ? null : (
          <button
            className={`btn btn--edit ${props.darkMode ? "dark" : ""}`}
            onClick={saveOrEdit}
          >
            <i class="bi bi-pen"></i>
          </button>
        )}
        </div>
      </div>
    );
  };

  return <div className="section__info">{displayExperience()}</div>;
};

export default Experience;
