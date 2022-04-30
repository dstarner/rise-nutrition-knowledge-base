/* eslint-disable react/display-name */
import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

function ImageStepper({ children, defaultStep = 0 }) {
  const { isDarkTheme } = useThemeConfig();
  const childrenArr = React.Children.toArray(children);
  const [activeStepIdx, setActiveStepIdx] = React.useState(defaultStep);
  const activeChild = childrenArr[activeStepIdx];

  const borderColor = isDarkTheme ? "#404040" : "#DCDCDC";
  const btnStyle = {
    border: 0,
    backgroundColor: borderColor,
    color: isDarkTheme ? "white" : "black",
    paddingLeft: "5px",
    paddingRight: "5px",
  };

  return (
    <div style={{
      border: `1px solid ${borderColor}`,
      borderRadius: "12px",
      marginTop: '12px',
      marginBottom: '12px',
      overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: `2px solid ${borderColor}`,
          paddingBottom: "6px",
          padding: "12px",
        }}
      >
        {childrenArr.map((child, idx) => (
          <div
            key={idx}
            style={{
              marginLeft: "8px",
              marginRight: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setActiveStepIdx(idx)}
          >
            <div
              style={{
                background: idx === activeStepIdx ? "grey" : borderColor,
                width: "40px",
                height: "40px",
                textAlign: "center",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ color: "white" }}>{idx + 1}</span>
            </div>
            <span style={{ textAlign: "center" }}>{child.props.title}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button style={btnStyle} onClick={() => setActiveStepIdx(Math.max(0, activeStepIdx - 1))}>
          ❮
        </button>
        <div style={{ padding: "8px", flexGrow: 1 }}>{activeChild}</div>
        <button style={btnStyle} onClick={() => setActiveStepIdx(Math.min(childrenArr.length - 1, activeStepIdx + 1))}>
          ❯
        </button>
      </div>
    </div>
  );
}

ImageStepper.Step = function ({ title, children, imgSrc, imgCaption }) {
  const { isDarkTheme } = useThemeConfig();
  const borderColor = isDarkTheme ? "#404040" : "#DCDCDC";

  return (
    <div style={{ width: "100%" }}>
      {children}
      {imgSrc && (
        <figure>
          <img
            src={imgSrc}
            style={{
              maxWidth: "100%",
              maxHeight: "60vh",
              margin: "0 auto",
              display: "block",
              border: `1px solid ${borderColor}`,
            }}
          />
          {imgCaption && (
            <figcaption
              style={{
                textAlign: "center",
                marginTop: "4px",
                fontStyle: "italic",
                fontSize: "14px",
                color: isDarkTheme ? "#A9A9A9" : "#696969",
              }}
            >
              {imgCaption}
            </figcaption>
          )}
        </figure>
      )}
    </div>
  );
};

export default ImageStepper;
