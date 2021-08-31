import React, { useState, useEffect, useRef } from "react";
import TagsCanvas from "react-tags-canvas";

function DynamicComponent() {
  const [_document, set_document] = React.useState(null);

  React.useEffect(() => {
    set_document(document);
  }, []);

  const ref = useRef(null);
  const [elem, setElem] = useState({});

  useEffect(() => {
    console.log("refrefref", ref);
    setElem({
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }, [ref]);
  useEffect(() => {
    console.log("elemelemelem", elem);
  }, [elem]);

  return (
    <div
      style={{
        width: "150%",
        height: "100vh",
        position: "absolute",
        left: 0,
      }}
      ref={ref}
    >
      {_document && (
        <TagsCanvas
          textColour="#ed911a"
          maxSpeed={0.06}
          freezeActive
          shuffleTags
          shape="sphere"
          zoom={0.9}
          initial={[0.05, 0.05]}
          noSelect
          textFont={null}
          textHeight={100}
          height={elem.height}
          width={elem.width}
          wheelZoom={false}
          tags={[
            { value: "Angularjs", weight: 20 },
            { value: "JQuery", weight: 20 },
            { value: "Postgres", weight: 20 },
            { value: "SQL", weight: 20 },
            { value: "PHP", weight: 15 },
          ]}
        />
      )}
      {_document && (
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
          }}
        >
          <TagsCanvas
            textColour="#ed911a"
            maxSpeed={0.06}
            freezeActive
            shuffleTags
            shape="sphere"
            zoom={1}
            initial={[0.05, 0.05]}
            noSelect
            textFont={null}
            textHeight={100}
            height={elem.height}
            width={elem.width}
            wheelZoom={true}
            zoomMax={1.5}
            zoomMin={0.7}
            zoomStep={0.01}
            tags={[
              { value: "JavaScript", weight: 30 },
              { value: "React", weight: 30 },
              { value: "Redux", weight: 20 },
              { value: "Redux-saga", weight: 20 },
              { value: "Angular 2+", weight: 20 },
              { value: "Ionic", weight: 20 },
              { value: "Bootstrap", weight: 20 },
              { value: "Material UI", weight: 20 },
              { value: "Firebase", weight: 20 },
              { value: "GCP", weight: 20 },
              { value: "HTML5", weight: 20 },
              { value: "CSS3", weight: 20 },
              { value: "SASS", weight: 20 },
              { value: "Git", weight: 20 },
              { value: "NodeJS", weight: 20 },
              { value: "Express", weight: 20 },
              { value: "Graphql", weight: 20 },
              { value: "PouchDB", weight: 20 },
              { value: "CouchDB", weight: 20 },
              { value: "MongoDB", weight: 20 },
              { value: "Firestore", weight: 20 },
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default DynamicComponent;
