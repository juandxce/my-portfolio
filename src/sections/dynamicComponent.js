import React, { useState, useEffect, useRef } from "react";
// import TagsCanvas from "react-tags-canvas";
import { useBreakpoint } from "styled-breakpoints/react-styled";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const Const = {
  maxWidth: 1000,
  topNav: 64,
  drawerWidth: 275,
  reactScrollProps: {
    spy: true,
    smooth: true,
    duration: 400,
    activeClass: "scroll-active",
    offset: -80,
  },
  rad: 10,
  pad: 20,
};

const slugs = [
  "react",
  "redux",
  "reduxsaga",
  "typescript",
  "angular",
  "jquery",
  "json",
  "ionic",
  "bootstrap",
  "materialdesign",
  "materialdesignicons",
  "googlecloud",
  "html5",
  "css3",
  "sass",
  "firebase",
  "gatsby",
  "nodedotjs",
  "express",
  "nginx",
  "graphql",
  "couchbase",
  "mongodb",
  "antdesign",
  "vercel",
  "visualstudiocode",
  "cypress",
  "jest",
];

const useIcons = (slugs) => {
  const [icons, setIcons] = React.useState();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }
};

const StyledTagsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;

  ${up("lg")} {
    width: 150%;
  }
`;

function DynamicComponent() {
  const [_document, set_document] = React.useState(null);

  React.useEffect(() => {
    set_document(document);
  }, []);

  const ref = useRef(null);
  const [elem, setElem] = useState({});

  const isLargeDevice = useBreakpoint(up("lg"));

  useEffect(() => {
    setElem({
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }, [ref]);
  const height = elem.height;
  const width = elem.width;
  const icons = useIcons(slugs);

  return (
    <StyledTagsWrapper ref={ref}>
      {_document && (
        <Cloud
          {...{
            id: "primary-cloud",
            containerProps: {
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: Const.pad * 2,
                marginRight: Const.pad * 2,
              },
            },
            canvasProps: {
              style: {
                maxWidth: isLargeDevice ? "55%" : "100%",
              },
            },
            options: {
              depth: 1,
              wheelZoom: isLargeDevice,
              pinchZoom: isLargeDevice,
              zoom: 0.8,
              zoomMax: 1,
              zoomMin: 0.7,
              maxSpeed: 0.05,
              minSpeed: 0.03,
              zoomStep: 0.01,
              imageScale: 2,
              activeCursor: "default",
              tooltip: "native",
              initial: [0.1, -0.1],
              clickToFront: 500,
              tooltipDelay: 0,
              outlineColour: "#0000",
            },
          }}
          width={width}
          height={height}
        >
          {icons}
        </Cloud>
      )}
    </StyledTagsWrapper>
  );
}

export default DynamicComponent;
