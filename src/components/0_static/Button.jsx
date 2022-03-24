import React from "react";

export function Button(props) {
  let className =
    props.effect_name + " shadow button is-inverted " + props.is_color;
  return <button className={className}>{props.label_text}</button>;
}
